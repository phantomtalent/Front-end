import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormBaseComponent } from '@shared/components/form-base/form-base.component';
import { ITransactionNotes } from '@utils/interfaces';

@Component({
  selector: 'app-create-transactrion-note',
  templateUrl: './create-transactrion-note.component.html',
  styleUrls: ['./create-transactrion-note.component.scss']
})
export class CreateTransactrionNoteComponent extends FormBaseComponent implements OnInit {

  @Output() create: EventEmitter<ITransactionNotes> = new EventEmitter<ITransactionNotes>();

  formGroup: FormGroup;
  expanded = false;

  constructor(private _fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      priority: new FormControl('info', [Validators.required]),
      message: new FormControl('', [Validators.required, Validators.maxLength(255)])
    });
  }

  formSubmit() {
    if (this.formGroup.valid) {
      this.create.emit({
        message: this.formGroup.value.message,
        priority: this.formGroup.value.priority
      });
    }
  }

  toggle() {
    this.expanded = !this.expanded;
  }

}
