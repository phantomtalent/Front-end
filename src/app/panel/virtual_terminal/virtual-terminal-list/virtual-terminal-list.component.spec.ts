import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualTerminalListComponent } from './virtual-terminal-list.component';

describe('VirtualTerminalListComponent', () => {
  let component: VirtualTerminalListComponent;
  let fixture: ComponentFixture<VirtualTerminalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualTerminalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualTerminalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
