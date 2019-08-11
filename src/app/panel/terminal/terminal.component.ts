import {Component} from '@angular/core';

@Component({
  selector: 'app-terminal',
  template: `
    <div class="element-wrapper">
      <router-outlet></router-outlet>
    </div>
  `
})
export class TerminalComponent {
}
