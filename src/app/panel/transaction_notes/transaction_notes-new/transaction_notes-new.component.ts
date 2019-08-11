import { Component } from '@angular/core';
import { TransactionNotesService } from '../../service/transaction_notes.service';
import { Router } from '@angular/router';
import { ITransactionNotes } from '@utils/interfaces';
import { TransactionNotes } from '@utils/models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBaseComponent } from '@shared/components/form-base/form-base.component';

@Component({
  selector: 'app-transaction-notes-new',
  templateUrl: './transaction_notes-new.component.html',
  styleUrls: ['./transaction_notes-new.component.scss']
})
export class TransactionNotesNewComponent extends FormBaseComponent {

  transactionNotes: ITransactionNotes = new TransactionNotes();
  loginValueExists = false;
  emailValueExists = false;

  formGroup = new FormGroup({
    login: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    email: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    first_name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    last_name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
  });

  constructor(private transactionNotesService: TransactionNotesService,
    private router: Router) {
    super();
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
      // this.transactionNotes.login = this.formGroup.get('login').value;
      // this.transactionNotes.email = this.formGroup.get('email').value;
      // this.transactionNotes.first_name = this.formGroup.get('first_name').value;
      // this.transactionNotes.last_name = this.formGroup.get('last_name').value;

      this.transactionNotesService.save(this.transactionNotes).subscribe(() => {
        this.formGroup.enable();
        this.router.navigate(['panel', 'transaction_notes']);
      }, error => this.handleError(error.error));
    }
  }

  handleError(error: string) {
    this.formGroup.enable();
    if (error === 'TRANSACTION_NOTE_EXISTS') {
      this.loginValueExists = true;
    }
    if (error === 'EMAIL_EXISTS') {
      this.emailValueExists = true;
    }
  }
}
