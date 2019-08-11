import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-terminal',
  template: `
  <div class="element-wrapper">
    <router-outlet></router-outlet>
  </div>
  `
})
export class VirtualTerminalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
