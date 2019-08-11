import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { TerminalService } from '@app/panel/service/terminal.service';
import * as moment from 'moment';
import { AcquirerService } from '@app/panel/service/acquirer.service';
import { VirtualTerminalService } from '@app/panel/service/virtual-terminal.service';
import { IdGenerator } from '@utils/id.generator';
import { TransactionService } from '@app/panel/service/transaction.service';
import { ITransaction } from '@utils/interfaces';

@Component({
  selector: 'app-virtual-terminal-details',
  templateUrl: './virtual-terminal-details.component.html',
  styleUrls: ['./virtual-terminal-details.component.scss']
})
export class VirtualTerminalDetailsComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute,
    public breadcrumbService: BreadcrumbService,
    private terminalService: TerminalService,
    private acquirerService: AcquirerService,
    private virtualTerminalService: VirtualTerminalService,
    private transactionService: TransactionService) {
  }

  public transactionType: string;
  public refTransactionId: number;

  ngOnInit() {
    this.initOptionValues();
    this.route.params.subscribe(params => {
      this.transactionType = params['transactionType'];
      this.refTransactionId = +params['refTransactionId'];
      if (this.refTransactionId != null && !isNaN(this.refTransactionId))
        this.handleReferenceTransaction();

      this.breadcrumbService.setItems([{ name: 'Virtual Terminal', slug: '/panel/virtual_terminal' }, { name: this.transactionType }]);
    });
  }

  ngAfterViewInit() {
    this.initFormValueChange();
  }


  formGroup = new FormGroup({
    terminal: new FormGroup({
      terminal: new FormControl('', [Validators.required, Validators.maxLength(255)])
    }),
    void_details: new FormGroup({
      transactionId: new FormControl(IdGenerator.randomTransactionIdString(), [Validators.required]),
      usage: new FormControl(),
      referenceId: new FormControl(null, [Validators.required])
    }),
    redirect_url: new FormGroup({
      notification_url: new FormControl(null, [Validators.required]),
      return_success_url: new FormControl(null, [Validators.required]),
      return_failure_url: new FormControl(null, [Validators.required])
    }),
    credit_details: new FormGroup({
      amount: new FormControl("0", [Validators.required, Validators.pattern('[0-9]*')]),
      cents: new FormControl("00", [Validators.pattern('[0-9]*'), Validators.maxLength(2)]),
      valueType: new FormControl(),
      currency: new FormControl(null, [Validators.required]),
      transactionId: new FormControl(IdGenerator.randomTransactionIdString(), [Validators.required]),
      usage: new FormControl(),
      referenceId: new FormControl(null, [Validators.required])
    }),
    details: new FormGroup({
      amount: new FormControl("0", [Validators.required, Validators.pattern('[0-9]*')]),
      cents: new FormControl("00", [Validators.pattern('[0-9]*'), Validators.maxLength(2)]),
      currency: new FormControl('', [Validators.required]),
      transactionId: new FormControl(IdGenerator.randomTransactionIdString(), [Validators.required]),
      usage: new FormControl(),
      moto: new FormControl(),
      gaming: new FormControl(),
      cryptocurrency: new FormControl()
    }),
    creditCardInformation: new FormGroup({
      cardNumber: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(15), Validators.maxLength(16)]),
      cardHolder: new FormControl(null, [Validators.required]),
      CVV: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      expirationDateMonth: new FormControl('', [Validators.required]),
      expirationDateYear: new FormControl('', [Validators.required]),
    }),
    customerInformation: new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required]),
    }),
    billingAddress: new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      primaryAddress: new FormControl(null, [Validators.required]),
      secondaryAddress: new FormControl(),
      zipCode: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      country: new FormControl('', [Validators.required]),
      state: new FormControl(null, [Validators.required])
    })
  });

  nonDecimalCurrencies: string[] = ["JPY"];

  terminalValueChanges(value) {
    let currency = "";

    if (value != "" && this.optionValues["terminal_id"]) {
      let _c = this.optionValues["terminal_id"].filter(t => t.id == value)
      if (_c.length > 0) {
        currency = _c[0].currency;
        if (this.nonDecimalCurrencies.indexOf(currency) > -1)
          this.showCents = false;
        else
          this.showCents = true;
      }
    }

    this.formGroup.get("details").get("currency").setValue(currency);
    this.formGroup.get("credit_details").get("currency").setValue(currency);
  }
  showCents: boolean = true;

  submitting = false;
  submitted = false;
  afterSubmission = false;


  public optionValues = {};

  initOptionValues() {

    this.terminalService.getTerminalsList()
      .subscribe(value => {
        if (value != null) {
          this.optionValues["terminal_id"] = value;
        }
      });

    this.acquirerService.getCountryList()
      .subscribe(value => {
        if (value != null) {
          this.optionValues["country"] = value.map(c => ({ id: c.code, name: c.country }));
        }
      });

    this.optionValues["expirationDateMonth"] = this.getMonths();
    this.optionValues["expirationDateYear"] = this.getYears();
  }

  initFormValueChange() {
    this.formGroup.get("terminal").get("terminal").valueChanges.subscribe((value) => { this.terminalValueChanges(value); });
    this.formGroup.get("credit_details").get("amount").valueChanges.subscribe(() => { this.amountChange(); });
    this.formGroup.get("credit_details").get("cents").valueChanges.subscribe(() => { this.amountChange(); });
  }

  getYears(): number[] {
    let result: number[] = [], min = moment().year(), max = moment().year() + 20;
    for (let i = min; i < max + 1; i++) {
      result.push(i);
    }
    return result;
  }


  getMonths(): number[] {
    let result: number[] = [], min = 1, max = 12;
    for (let i = min; i < max + 1; i++) {
      result.push(i);
    }
    return result;
  }


  response: any = null;
  responseError: any;
  transactionResponse: any;

  submit() {
    this.response = null;
    this.responseError = null;
    this.transactionResponse = null;

    this.submitted = true;

    if (this.formGroup.invalid) {
      this.errors = [];
      this.checkErrors(this.formGroup);
      window.scroll(0, 0);
      return;
    }
    else {
      this.submitting = true;
      this.virtualTerminalService.save(this.formGroup.value, this.transactionType).subscribe((response: any) => {

        this.response = response;
        this.submitting = false;

        if (response && response.status && response.status == "error") {
          this.handleError(response);
        }
        else {
          if (response && "unique_id" in response) {
            this.virtualTerminalService.getTransaction(response["unique_id"]).subscribe((transactionResponse) => {
              this.transactionResponse = transactionResponse;
            }, error => this.handleError(error.error));
          }
          this.formGroup.enable();
          this.afterSubmission = true;
        }
      }, error => this.handleError(error.error));
    }
  }

  handleError(error) {
    this.submitting = false;
    this.responseError = error;
    window.scroll(0, 0);
  }

  errors: string[] = [];

  checkErrors(group: FormGroup | FormArray): void {
    Object.keys(group.controls).forEach((key: string) => {

      const abstractControl = group.controls[key];
      if (abstractControl instanceof FormGroup || abstractControl instanceof FormArray) {
        this.checkErrors(abstractControl);
      } else {
        if (abstractControl.errors) {

          if (abstractControl.errors.required)
            this.errors.push(`${this.label(this.getFormControlName(abstractControl))} is requred.`);

          if (abstractControl.errors.minlength)
            this.errors.push(`${this.label(this.getFormControlName(abstractControl))} must contain at least ${abstractControl.errors.minlength.requiredLength} characters.`);

          if (abstractControl.errors.maxlength)
            this.errors.push(`${this.label(this.getFormControlName(abstractControl))} must not exceed ${abstractControl.errors.maxlength.requiredLength} characters.`);

          if (abstractControl.errors.email)
            this.errors.push(`${this.label(this.getFormControlName(abstractControl))} is not valid.`);

          if (abstractControl.errors.pattern) {
            switch (abstractControl.errors.pattern.requiredPattern) {
              case "^[0-9]*$":
                this.errors.push(`${this.label(this.getFormControlName(abstractControl))} must contain numbers only.`);
                break;
              default:
                this.errors.push(`${this.label(this.getFormControlName(abstractControl))} is not in correct format.`);
                break;
            }
          }

        }
      }
    });
  }

  label(formControlName: string): string {
    switch (formControlName) {
      case "expirationDateMonth":
        return "Expiration Date (Month)";
      case "expirationDateYear":
        return "Expiration Date (Year)";
      case "CVV":
        return "CVV";
      default:
        return formControlName.split(/(?=[A-Z])/).map(s => this.capitalize(s)).join(' ').split('_').map(s => this.capitalize(s)).join(' ');
    }
  }

  value(key, val) {
    if (key == "amount")
      return `${(val / 100)} ${this.response.currency}`;
    else
      return val;
  }

  capitalize(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  getFormControlName(c: AbstractControl): string | null {
    const formGroup = c.parent.controls;
    return Object.keys(formGroup).find(name => c === formGroup[name]) || null;
  }

  show(section: string) {
    let isVisible: boolean = this.virtualTerminalService.showSection(this.transactionType, section);
    if (!isVisible) {
      Object.keys((<FormGroup>this.formGroup.get(section)).controls).forEach((key: string) => {
        this.formGroup.get(section).get(key).clearValidators();
        this.formGroup.get(section).get(key).updateValueAndValidity();
      });
    }
    return isVisible;
  }

  get title() {
    return this.transactionType.charAt(0).toUpperCase() + this.transactionType.slice(1);
  }

  get creditDetails(): FormGroup {
    return <FormGroup>this.formGroup.get("credit_details");
  }

  valueTypeChange(value) {

    if (value == "remaining") {
      let amountValue: any = "0";
      let centsValue: any = "00";

      let _amount = this.remainingAmount;
      amountValue = Math.floor(_amount / 100);
      centsValue = (_amount - amountValue * 100).toString().padStart(2, "0");

      if (this.creditDetails.get("amount").value != amountValue)
        this.creditDetails.get("amount").setValue(amountValue);

      if (this.creditDetails.get("cents").value != centsValue)
        this.creditDetails.get("cents").setValue(centsValue);
    }
  }

  amountChange() {

    let amount = +this.creditDetails.get("amount").value;
    let cents = this.creditDetails.get("cents").value.toString().padEnd(2, "0");
    if (cents != null && cents != "")
      amount += +cents / 100;

    amount *= 100;

    let valueType = this.creditDetails.get("valueType");
    if (amount != this.remainingAmount)
      valueType.setValue("custom");
    else
      valueType.setValue("remaining");
  }


  remainingAmount: number;
  handleReferenceTransaction() {
    this.transactionService.get(this.refTransactionId).subscribe((refTransaction: ITransaction) => {

      if (this.transactionType == "refund") {
        let _amount = Math.floor(refTransaction.amount / 100);
        let _cents = (refTransaction.amount - _amount * 100).toString().padStart(2, "0");
        this.remainingAmount = refTransaction.amount;

        this.creditDetails.get("amount").setValue(_amount);
        this.creditDetails.get("cents").setValue(_cents);
        this.creditDetails.get("referenceId").setValue(refTransaction.unique_id);
        this.formGroup.get("terminal").get("terminal").setValue(refTransaction.terminal_id);
        this.creditDetails.get("currency").setValue(refTransaction.currency);
      }
      else if (this.transactionType == "void") {
        this.formGroup.get("terminal").get("terminal").setValue(refTransaction.terminal_id);
        this.formGroup.get("void_details").get("referenceId").setValue(refTransaction.unique_id);
      }

    }, (error) => {
      console.log(error);
    });
  }

  isNaN = (number: number) => isNaN(number);

}
