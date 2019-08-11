import {Component} from '@angular/core';

@Component({
  selector: 'app-tasklogs',
  template: `
    <div class="element-wrapper">
      <router-outlet></router-outlet>
    </div>
  `
})
export class TaskLogsComponent {
}
