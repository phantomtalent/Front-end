import {Component, Input} from '@angular/core';
import {Notification} from '@utils/models';

@Component({
  selector: 'app-wpf_payment-notification',
  templateUrl: './wpf_payment-notification.component.html',
  styleUrls: ['./wpf_payment-notification.component.scss']
})
export class WpfPaymentNotificationComponent {

  @Input() notification: Notification;

}
