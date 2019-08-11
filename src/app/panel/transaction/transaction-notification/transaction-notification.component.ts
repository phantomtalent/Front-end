import {Component, Input} from '@angular/core';
import {Notification} from '@utils/models';

@Component({
  selector: 'app-transaction-notification',
  templateUrl: './transaction-notification.component.html',
  styleUrls: ['./transaction-notification.component.scss']
})
export class TransactionNotificationComponent {

  @Input() notification: Notification;

}
