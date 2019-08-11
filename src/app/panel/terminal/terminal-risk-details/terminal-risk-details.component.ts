import { Component, Input, OnInit } from '@angular/core';
import {ITransaction, ITransactionDeclinedReasons} from '@utils/interfaces';
import { TransactionService } from '@app/panel/service/transaction.service';
import { AlertifyService } from '@shared/alertify.service';

@Component({
  selector: 'app-terminal-risk-details',
  templateUrl: './terminal-risk-details.component.html',
  styleUrls: ['./terminal-risk-details.component.scss']
})
export class TerminalRiskDetailsComponent implements OnInit {
  @Input() declinedReasonsList: ITransactionDeclinedReasons[] = [];

  constructor(
  ) { }

  ngOnInit() {

  }

}
