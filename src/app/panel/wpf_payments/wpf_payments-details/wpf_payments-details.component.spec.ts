import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WpfPaymentsDetailsComponent} from './wpf_payments-details.component';

describe('WpfPaymentsDetailsComponent', () => {
  let component: WpfPaymentsDetailsComponent;
  let fixture: ComponentFixture<WpfPaymentsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpfPaymentsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpfPaymentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
