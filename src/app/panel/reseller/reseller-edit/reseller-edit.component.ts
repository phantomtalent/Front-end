import { Component, OnInit } from '@angular/core';
import { ResellerService } from '../../service/reseller.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { ActivatedRoute, Router } from '@angular/router';
import {ResellerUser, Reseller, MerchantUser, MerchantCompanies} from '@utils/models';
import { FormBaseComponent } from '@shared/components/form-base/form-base.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MerchantList } from '@app/panel/domain/merchant-list';
import { MerchantService } from '@app/panel/service/merchant.service';
import {SelectSearch} from '@utils/models/select-search.model';
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-reseller-edit',
  templateUrl: './reseller-edit.component.html',
  styleUrls: ['./reseller-edit.component.scss']
})
export class ResellerEditComponent extends FormBaseComponent implements OnInit {

  reseller: Reseller = new Reseller();
  merchants: MerchantList[];
  merchantselectsdata: SelectSearch[] = [];
  valueExists = false;

  successResellerUserMsg: string;
  errorResellerUserMsg: string;
  resellerUser: string;
  resellerUserList: ResellerUser[] = [];
  resellerUsers: ResellerUser[] = [];

  formGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    admin_id: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    domain: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    enabled: new FormControl(false),
  });

  constructor(private resellerService: ResellerService,
    private merchantService: MerchantService,
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService) {
    super();
  }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Configuration', slug: '/panel/resellers' }, { name: 'Resellers', slug: '/panel/resellers' }, { name: 'Edit' }]);
    const reseller = this.route.snapshot.data['reseller'];

    if (!reseller) {
      this.router.navigate(['panel', 'resellers']);
    }

    this.reseller = reseller;
    this.formGroup.patchValue(this.reseller);

    this.merchantService.getMerchantsList()
      .subscribe(value => {
        if (value != null) {
          this.merchants = value;
          this.merchantselectsdata = this.merchants.map(merchant => new SelectSearch(merchant.id, merchant.name));
        }
      });

    forkJoin(
      this.resellerService.getResellerUsersList(),
      this.resellerService.getResellerUsers(this.reseller.id)
    ).subscribe(([resellers, resellersUsers]) => {
      if (resellers) {
        resellers.forEach((element) => {
          this.resellerUsers.push(new ResellerUser(element));
        });
        if (resellersUsers) {
          resellersUsers.forEach((element) => {
            const user = new ResellerUser(element);
            const resellerUser = this.resellerUsers.find((ct) => ct.id === user.id);
            user.login = resellerUser.login;
            this.resellerUserList.push(user);
          });
        }
      }
    });
  }

  clear() {
    this.formGroup.get('name').reset(null);
    this.formGroup.get('admin_id').reset(null);
    this.formGroup.get('domain').reset(null);
    this.formGroup.get('enabled').reset(null);
  }

  selectTnx(controlName: string) {
    this.formGroup.get(controlName).setValue(!this.formGroup.get(controlName).value);
  }

  submit() {
    if (this.formGroup.valid) {
      this.formGroup.disable();
      this.reseller.name = this.formGroup.get('name').value;
      this.reseller.admin_id = this.formGroup.get('admin_id').value;
      this.reseller.domain = this.formGroup.get('domain').value;
      this.reseller.enabled = this.formGroup.get('enabled').value;

      this.resellerService.persist(this.reseller).subscribe(() => {
        this.formGroup.enable();
        this.router.navigate(['panel', 'resellers', this.reseller.id]);
      }, (error) => {
        this.formGroup.enable();
      });
    }
  }

  handleError(error: string) {
    if (error === 'RESELLER_EXISTS') {
      this.valueExists = true;
    }
  }

  addResellerUser() {
    const resellerUserId = parseInt(this.resellerUser, 10);
    if (!this.resellerUser) {
      this.successResellerUserMsg = null;
      this.errorResellerUserMsg = 'Please select a Reseller User';
      this.resetMsg();
    } else {
      const selectedResellerUser = this.resellerUsers.find((element) => element.id === resellerUserId);
      if (!selectedResellerUser) {
        return;
      }
      const currentResellerUser = this.resellerUserList.find((element) => element.id === resellerUserId);
      if (!currentResellerUser) {
        const newResellerUser = new ResellerUser();
        newResellerUser.owner_id = this.reseller.id;
        newResellerUser.id = resellerUserId;
        newResellerUser.login = selectedResellerUser.login;
        this.resellerService.addResellerUser(newResellerUser).subscribe((result) => {
          newResellerUser.id = result.id;
          this.resellerUserList.push(newResellerUser);
          this.errorResellerUserMsg = null;
          this.successResellerUserMsg = 'Reseller User assigned successfully';
          this.resetMsg();
        });
      } else {
        this.successResellerUserMsg = null;
        this.errorResellerUserMsg = 'Reseller User has already been taken: ' + selectedResellerUser.login;
        this.resetMsg();
      }
    }
  }

  removeResellerUserAction($event) {
    if ($event && $event.id) {
      this.resellerService.removeResellerUser($event.id).subscribe(() => {
        this.errorResellerUserMsg = null;
        this.successResellerUserMsg = 'Reseller User deleted successfully';
        this.resetMsg();
      });
    }
  }

  resetMsg() {
    setTimeout(() => {
      this.successResellerUserMsg = null;
      this.errorResellerUserMsg = null;
    }, 2000);
  }
}
