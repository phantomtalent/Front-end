import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransactionService } from '@app/panel/service/transaction.service';
import { TransactionTypesList } from '@app/panel/domain/transaction-types-list';

@Component({
  selector: 'app-virtual-terminal-list',
  templateUrl: './virtual-terminal-list.component.html',
  styleUrls: ['./virtual-terminal-list.component.scss']
})
export class VirtualTerminalListComponent  implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService,
    private transactionService: TransactionService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Virtual Terminal' }]);
    this.getTransactionTypes();
  }

  formGroup = new FormGroup({
    transactionType: new FormControl(null, [Validators.maxLength(255)])
  });


  get data() {
    let _data: TransactionTypesList[];

    _data = this.transactionTypes;

    if (this.formGroup.get("transactionType").value != null &&
      this.formGroup.get("transactionType").value != "") {
      let _filter = this.formGroup.get("transactionType").value;
      _data = _data.filter(d => d.type.toLowerCase().indexOf(_filter.toLowerCase()) > -1)
    }

    return _data;
  }

  get categories() {
    let _ctgs = [];
    if (this.data) {
      this.data.forEach(c => {
        if (_ctgs.indexOf(c.category) == -1)
          _ctgs.push(c.category);
      });
    }
    return _ctgs;
  }

  transactionTypes: TransactionTypesList[];

  getTransactionTypes() {

    this.transactionService.getTransactionTypesList()
      .subscribe(value => {
        if (value && value.length > 0) {
          value.forEach(transaction => {
            if (!transaction.category)
              transaction.category = "Cards"; //default category if not provided by API
          });
          this.transactionTypes = value;
        }
      });

  }


}
