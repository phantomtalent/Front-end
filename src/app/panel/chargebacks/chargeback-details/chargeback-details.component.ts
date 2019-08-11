import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IChargeback } from '@utils/interfaces';
import { Chargeback } from '@utils/models';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { filter, take, switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-chargeback-details',
  templateUrl: './chargeback-details.component.html',
  styleUrls: ['./chargeback-details.component.scss']
})
export class ChargebackDetailsComponent implements OnInit, OnDestroy {

  chargeback: IChargeback = new Chargeback();
  additionalChargebacks: IChargeback[] = [];
  _destroy: Subject<void> = new Subject<void>();
  @Input()
  config = {
    useInput: false,
    showHeader: true,
    showDetails: true,
    chargeback: null,
    notes: null,
    additionalChargebacks: null
  };

  constructor(private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit() {
    if (this.config.useInput) {
      this.init(
        this.config.chargeback,
        this.config.additionalChargebacks
      );
    } else {
      this.init(
        this.route.snapshot.data['chargeback'],
        this.route.snapshot.data['additionalChargebacks']
      );
    }
  }

  init(chargeback, additionalChargebacks) {
    if (!chargeback) {
      this.router.navigate(['panel', 'chargebacks']);
    }
    this.breadcrumbService.setItems([{ name: 'Chargebacks', slug: '/panel/chargebacks' }, { name: 'Chargeback' }]);
    this.route.params
      .pipe(takeUntil(this._destroy))
      .subscribe(() => {
        this.additionalChargebacks = additionalChargebacks;
        this.chargeback = new Chargeback(chargeback);
      });
  }

  ngOnDestroy() {
    this._destroy.next();
    this._destroy.complete();
  }
}
