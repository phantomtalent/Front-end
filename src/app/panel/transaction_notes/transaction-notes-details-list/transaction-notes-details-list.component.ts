import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITransactionNotes } from '@utils/interfaces';

@Component({
  selector: 'app-transaction-notes-details-list',
  templateUrl: './transaction-notes-details-list.component.html',
  styleUrls: ['./transaction-notes-details-list.component.scss']
})
export class TransactionNotesDetailsListComponent {

  @Input() notes: ITransactionNotes[];
  @Output() delete: EventEmitter<ITransactionNotes> = new EventEmitter<ITransactionNotes>();
  @Output() review: EventEmitter<ITransactionNotes> = new EventEmitter<ITransactionNotes>();


}
