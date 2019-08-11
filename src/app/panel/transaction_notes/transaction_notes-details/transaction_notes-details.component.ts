import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ITransactionNotes} from '@utils/interfaces';
import {TransactionNotes} from '@utils/models';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';

@Component({
  selector: 'app-transaction-notes-details',
  templateUrl: './transaction_notes-details.component.html',
  styleUrls: ['./transaction_notes-details.component.scss']
})
export class TransactionNotesDetailsComponent implements OnInit {

  transactionNote: ITransactionNotes = new TransactionNotes();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Payment Transactions', slug: '/panel/transactions' }, { name: 'Transactions Notes', slug: '/panel/transaction_notes' }, { name: 'Details' }]);
    const transactionNote = this.route.snapshot.data['transaction_note'];

    if (!transactionNote) {
      this.router.navigate(['panel', 'transaction_notes']);
    }

    this.transactionNote = transactionNote;
  }

}
