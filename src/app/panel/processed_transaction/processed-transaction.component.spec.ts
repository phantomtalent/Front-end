import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProcessedTransactionComponent} from './processed-transaction.component';

describe('ProcessedTransactionComponent', () => {
  let component: ProcessedTransactionComponent;
  let fixture: ComponentFixture<ProcessedTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessedTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessedTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
