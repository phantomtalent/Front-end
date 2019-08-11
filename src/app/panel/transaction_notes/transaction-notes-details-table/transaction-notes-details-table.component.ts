import { Component, OnInit, Input, TemplateRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ITransactionNotes } from '@utils/interfaces';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ConfirmDialogComponent } from '@shared/modals/confirm-dialog/confirm-dialog.component';
import { Observable, Subscription } from 'rxjs';
import { filter, finalize } from 'rxjs/operators';


@Component({
  selector: 'app-transaction-notes-details-table',
  templateUrl: './transaction-notes-details-table.component.html',
  styleUrls: ['./transaction-notes-details-table.component.scss']
})
export class TransactionNotesDetailsTableComponent implements OnInit, OnDestroy {
  @Input() note: ITransactionNotes;
  @Output() delete: EventEmitter<ITransactionNotes> = new EventEmitter<ITransactionNotes>();
  @Output() review: EventEmitter<ITransactionNotes> = new EventEmitter<ITransactionNotes>();

  message = '';

  private _reviewMode = false;
  private _deleteMode = false;
  private _confirmStatus = false;
  private _dialogDismiss$: Observable<void> = this._dialogService.onHide.pipe(
    finalize(() => this._confirmStatus = false),
    filter(() => this._confirmStatus)
  );

  private _modalRef: BsModalRef;

  private _subscriprions: Subscription[] = [];

  constructor(private _dialogService: BsModalService) { }

  ngOnInit() {

    this._subscriprions.push(
      this._dialogDismiss$
        .pipe(filter(() => this._deleteMode))
        .subscribe(() => {
          this._deleteMode = false;
          this.delete.emit(this.note);
        })
    );
    this._subscriprions.push(
      this._dialogService.onHide
        .pipe(filter(() => this._reviewMode))
        .subscribe(() => {
          this._reviewMode = false;
          this.note.reviewed_by = 1;
          this.review.emit(this.note);
        })
    );
  }

  ngOnDestroy() {
    this._subscriprions
      .filter(s => !!s)
      .forEach(s => s.unsubscribe());
  }

  deleteNote(ref: TemplateRef<any>) {
    this._deleteMode = true;
    this.message = 'Are you sure that you want to delete note?';
    this._modalRef = this._dialogService.show(ref);

  }

  markAsReviewed(ref: TemplateRef<any>) {
    this._reviewMode = true;
    this.message = 'Are you sure that you want to review note?';
    this._modalRef = this._dialogService.show(ref);
  }

  confirm(status: boolean) {
    this._confirmStatus = status;
    this._modalRef.hide();
  }

}
