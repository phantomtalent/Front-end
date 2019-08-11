import {Component} from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `
    <div class="element-wrapper">
      <router-outlet></router-outlet>
    </div>
  `
})
export class NotificationComponent {
}
