import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IMerchant, INotificationUrls, INotificationUrlType} from '@utils/interfaces';
import {Company, Merchant, MerchantCompanies, MerchantUser} from '@utils/models';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import {MerchantStateType, MerchantStateType2LabelMapping} from '@app/panel/domain/merchant-state-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NotificationUrlsService} from '@app/panel/service/notification-urls.service';
import {MerchantService} from '@app/panel/service/merchant.service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-merchant-details',
  templateUrl: './merchant-details.component.html',
  styleUrls: ['./merchant-details.component.scss']
})
export class MerchantDetailsComponent implements OnInit {

  merchant: Merchant = new Merchant();

  public MerchantStateType2LabelMapping = MerchantStateType2LabelMapping;

  public stateTypes = Object.values(MerchantStateType).filter(value => typeof value === 'number');

  notificationUrlsList: INotificationUrls[] = [];
  notificationTypesList: INotificationUrlType[] = [];

  companiesList: MerchantCompanies[] = [];
  companies: Company[] = [];
  isPassShow = false;

  merchantUserList: MerchantUser[] = [];
  merchantUsers: MerchantUser[] = [];

  constructor(private merchantService: MerchantService,
              private router: Router,
              private route: ActivatedRoute,
              private breadcrumbService: BreadcrumbService,
              private notificationUrlsService: NotificationUrlsService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Configuration', slug: '/panel/merchants' }, { name: 'Merchants', slug: '/panel/merchants' }, { name: 'Details' }]);
    const merchant = this.route.snapshot.data['merchant'];

    if (!merchant) {
      this.router.navigate(['panel', 'merchants']);
    }

    this.merchant = merchant;

    this.notificationUrlsService.getNotificationTypesList()
      .subscribe(value => {
        this.notificationTypesList = value;
      });

    forkJoin(
      this.merchantService.getCompaniesList(),
      this.merchantService.getCompanies(this.merchant.id)
    ).subscribe(([merchants, merchantsCompanies]) => {
      if (merchants) {
        merchants.forEach((element) => {
          this.companies.push(new Company(element));
        });
        if (merchantsCompanies) {
          merchantsCompanies.forEach((element) => {
            const merchantCompanies = new MerchantCompanies(element);
            const company = this.companies.find((ct) => ct.id === merchantCompanies.company_id);
            merchantCompanies.name = company.name;
            this.companiesList.push(merchantCompanies);
          });
        }
      }
    });

    forkJoin(
      this.merchantService.getMerchantUsersList(),
      this.merchantService.getMerchantUsers(this.merchant.id)
    ).subscribe(([merchants, merchantsUsers]) => {
      if (merchants) {
        merchants.forEach((element) => {
          this.merchantUsers.push(new MerchantUser(element));
        });
        if (merchantsUsers) {
          merchantsUsers.forEach((element) => {
            const user = new MerchantUser(element);
            const merchantUser = this.merchantUsers.find((ct) => ct.id === user.id);
            user.login = merchantUser.login;
            this.merchantUserList.push(user);
          });
        }
      }
    });

    this.loadNotificationsList();
  }

  private async loadNotificationsList(): Promise<void> {
    try {
      this.notificationUrlsList = await this.notificationUrlsService.getList(this.merchant.id).toPromise();
    } catch (e) {
      this.notificationUrlsList = [];
    }
  }

  showPassword = () => {
    let retVal = confirm("Do you really want to decrypt this attribute?");
    if(retVal == true){
      this.isPassShow = true;
    }
  }
}
