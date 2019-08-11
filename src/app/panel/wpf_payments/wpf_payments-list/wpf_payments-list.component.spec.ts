import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WpfPaymentsListComponent} from './wpf_payments-list.component';

describe('WpfPaymentsListComponent', () => {
  let component: WpfPaymentsListComponent;
  let fixture: ComponentFixture<WpfPaymentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpfPaymentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpfPaymentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
