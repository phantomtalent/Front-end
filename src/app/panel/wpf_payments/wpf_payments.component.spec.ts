import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WpfPaymentsComponent} from './wpf_payments.component';

describe('WpfPaymentsComponent', () => {
  let component: WpfPaymentsComponent;
  let fixture: ComponentFixture<WpfPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpfPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpfPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
