import { Component, OnInit } from '@angular/core';
import { TransactionNotesService } from '../../service/transaction_notes.service';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ITransactionNotes } from '@utils/interfaces';
import { TransactionNotes } from '@utils/models';
import { FormBaseComponent } from '@shared/components/form-base/form-base.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction-notes-edit',
  templateUrl: './transaction_notes-edit.component.html',
  styleUrls: ['./transaction_notes-edit.component.scss']
})
export class TransactionNotesEditComponent extends FormBaseComponent implements OnInit {

  transactionNote: ITransactionNotes = new TransactionNotes();
  valueExists = false;

  formGroup = new FormGroup({
    // id: new FormControl({value: null, disabled: true}, [Validators.maxLength(255)]),
    login: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    email: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    first_name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    last_name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
  });

  constructor(private transactionNotesService: TransactionNotesService,
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService) {
    super();
  }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Payment Transactions', slug: '/panel/transactions' }, { name: 'Transactions Notes', slug: '/panel/transaction_notes' }, { name: 'Edit' }]);
    const transactionNote = this.route.snapshot.data['transaction_note'];

    if (!transactionNote) {
      this.router.navigate(['panel', 'transaction_notes']);
    }

    this.transactionNote = transactionNote;
    this.formGroup.patchValue(this.transactionNote);
  }

  clear() {
    this.formGroup.get('login').reset(null);
    this.formGroup.get('email').reset(null);
    this.formGroup.get('first_name').reset(null);
    this.formGroup.get('last_name').reset(null);
  }

  submit() {
    if (this.formGroup.valid) {
      this.formGroup.disable();
      // this.transactionNote.login = this.formGroup.get('login').value;
      // this.transactionNote.email = this.formGroup.get('email').value;
      // this.transactionNote.first_name = this.formGroup.get('first_name').value;
      // this.transactionNote.last_name = this.formGroup.get('last_name').value;

      this.transactionNotesService.persist(this.transactionNote).subscribe(() => {
        this.formGroup.enable();
        this.router.navigate(['panel', 'transaction_notes']);
        this.router.navigate(['panel', 'transaction_notes', this.transactionNote.id]);
      }, (error) => {
        this.formGroup.enable();
      });
    }
  }

  handleError(error: string) {
    if (error === 'TRANSACTION_NOTE_EXISTS') {
      this.valueExists = true;
    }
  }
}
