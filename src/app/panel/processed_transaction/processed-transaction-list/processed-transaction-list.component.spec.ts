import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProcessedTransactionListComponent} from './processed-transaction-list.component';

describe('ProcessedTransactionListComponent', () => {
  let component: ProcessedTransactionListComponent;
  let fixture: ComponentFixture<ProcessedTransactionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessedTransactionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessedTransactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
