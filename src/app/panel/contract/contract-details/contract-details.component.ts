import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IContract} from '@utils/interfaces';
import {CardBrands, Contract, Currency} from '@utils/models';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import {ContractService} from '@app/panel/service/contract.service';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.scss']
})
export class ContractDetailsComponent implements OnInit {

  contract: Contract = new Contract();
  currencyList: Currency[] = [];
  cardBrandsList: CardBrands[] = [];
  isPassShow = false;

  constructor(private contractService: ContractService,
              private router: Router,
              private route: ActivatedRoute,
              private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Configuration', slug: '/panel/resellers' }, { name: 'Contracts', slug: '/panel/contracts' }, { name: 'Details' }]);
    const contract = this.route.snapshot.data['contract'];

    if (!contract) {
      this.router.navigate(['panel', 'contracts']);
    }

    this.contract = contract;

    this.contractService.getCurrencies(this.contract.id)
      .subscribe(value => {
        if (value) {
          value.forEach((element) => {
            this.currencyList.push(new Currency(element));
          });
        }
      });

    this.contractService.getCardBrands(this.contract.id)
      .subscribe(value => {
        if (value) {
          value.forEach((element) => {
            this.cardBrandsList.push(new CardBrands(element));
          });
        }
      });
  }

  showPassword = () => {
    let retVal = confirm("Do you really want to decrypt this attribute?");
    if(retVal == true){
      this.isPassShow = true;
    }
  }
}
