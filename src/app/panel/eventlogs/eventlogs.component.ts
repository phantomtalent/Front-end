import {Component} from '@angular/core';

@Component({
  selector: 'app-eventlogs',
  template: `
    <div class="element-wrapper">
      <router-outlet></router-outlet>
    </div>
  `
})
export class EventLogsComponent {
}
