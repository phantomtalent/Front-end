import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProcessedTransactionDetailsComponent} from './processed-transaction-details.component';

describe('ProcessedTransactionDetailsComponent', () => {
  let component: ProcessedTransactionDetailsComponent;
  let fixture: ComponentFixture<ProcessedTransactionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessedTransactionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessedTransactionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
