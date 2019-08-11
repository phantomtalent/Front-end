import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualTerminalDetailsComponent } from './virtual-terminal-details.component';

describe('VirtualTerminalDetailsComponent', () => {
  let component: VirtualTerminalDetailsComponent;
  let fixture: ComponentFixture<VirtualTerminalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualTerminalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualTerminalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
