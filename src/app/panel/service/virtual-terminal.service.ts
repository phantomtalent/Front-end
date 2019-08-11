import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { IVirtualTerminal } from '@utils/interfaces';

@Injectable({
  providedIn: 'root'
})
export class VirtualTerminalService {

  constructor(private http: HttpClient) { }

  save(form: any, type: string) {

    let _amount = 0;
    if ("" + form.details.amount != "0") {
      _amount += +form.details.amount;
      if (form.details.cents)
        _amount += +(form.details.cents.toString().padEnd(2, "0")) / 100;

    } else if (form.credit_details.amount != null && form.credit_details.amount != "") {
      _amount += +form.credit_details.amount;
      if (form.credit_details.cents)
        _amount += +form.credit_details.cents / 100;
    }

    _amount *= 100;

    let _referenceId = "";
    if (form.void_details.referenceId != null && form.void_details.referenceId != "")
      _referenceId = form.void_details.referenceId;
    else if (form.credit_details.referenceId != null && form.credit_details.referenceId != "")
      _referenceId = form.credit_details.referenceId;

    let request: IVirtualTerminal = {
      merchant_transaction_id: form.details.transactionId,
      card_holder: form.creditCardInformation.cardHolder,
      card_number: form.creditCardInformation.cardNumber,
      cvv: form.creditCardInformation.CVV,
      expiration_month: form.creditCardInformation.expirationDateMonth,
      expiration_year: form.creditCardInformation.expirationDateYear,
      terminal_id: +form.terminal.terminal,
      amount: _amount,
      currency: form.details.currency,
      customer_email: form.customerInformation.email,
      customer_phone: form.customerInformation.phone,
      billing_address_first_name: form.billingAddress.firstName,
      billing_address_last_name: form.billingAddress.lastName,
      billing_address_address1: form.billingAddress.primaryAddress,
      billing_address_zip_code: form.billingAddress.zipCode,
      billing_address_city: form.billingAddress.city,
      billing_address_state: form.billingAddress.country,
      billing_address_country: form.billingAddress.state,
      usage: form.void_details.usage,
      reference_transaction_id: _referenceId
    };

    return this.http.post(environment.api.urls.virtual_terminals.save(type), request);
  }

  getTransaction(uniqueId: string) {
    return this.http.get(environment.api.urls.virtual_terminals.getTransaction(uniqueId));
  }

  showSection(type: string, section: string): boolean {
    let result = false;
    let selectedItems = VirtualTerminalConfig.filter(c => c.type.toLowerCase() == type.toLowerCase());
    if (selectedItems.length > 0) {
      let item = selectedItems[0];
      if (item.sections.indexOf(section) > -1 || item.sections.indexOf('*') > -1)
        result = true;
    }
    else {
      let defaultItem = VirtualTerminalConfig.filter(c => c.type == '_default')[0];
      if (defaultItem.sections.indexOf(section) > -1 || defaultItem.sections.indexOf('*') > -1)
        result = true;
    }
    return result;
  }
}

const VirtualTerminalConfig = [
  {
    type: 'Authorize',
    sections: ['terminal', 'details', 'creditCardInformation', 'billingAddress', 'customerInformation']
  },
  {
    type: 'Sale',
    sections: ['terminal', 'details', 'creditCardInformation', 'billingAddress', 'customerInformation']
  },
  {
    type: 'Refund',
    sections: ['terminal', 'credit_details']
  },
  {
    type: 'Capture',
    sections: ['terminal', 'credit_details']
  },
  {
    type: 'Void',
    sections: ['terminal', 'void_details']
  },
  {
    type: 'Authorize3d',
    sections: ['terminal', 'redirect_url', 'details', 'creditCardInformation', 'billingAddress', 'customerInformation']
  },
  {
    type: 'Sale3d',
    sections: ['terminal', 'redirect_url', 'details', 'creditCardInformation', 'billingAddress', 'customerInformation']
  },
  {
    type: 'Init_recurring_sale',
    sections: ['terminal', 'details', 'creditCardInformation', 'billingAddress', 'customerInformation']
  },
  {
    type: 'Init_recurring_sale3d',
    sections: ['terminal', 'redirect_url', 'details', 'creditCardInformation', 'billingAddress', 'customerInformation']
  },
  {
    type: 'Recurring_sale',
    sections: ['terminal', 'credit_details']
  },
  {
    type: 'Credit',
    sections: ['terminal', 'credit_details']
  },
  {
    type: 'Account_verification',
    sections: ['terminal', 'details', 'creditCardInformation', 'billingAddress', 'customerInformation']
  },
  {
    type: "_default",
    sections: ['*']
  }
];
