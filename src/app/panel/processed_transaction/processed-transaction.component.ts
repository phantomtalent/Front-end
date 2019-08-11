import {Component} from '@angular/core';

@Component({
  selector: 'app-processed-transaction',
  template: `
    <div class="element-wrapper">
      <router-outlet></router-outlet>
    </div>
  `
})
export class ProcessedTransactionComponent {
}
