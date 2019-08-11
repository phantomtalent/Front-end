import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionViewReceiptComponent } from './transaction-view-receipt.component';

describe('TransactionViewReceiptComponent', () => {
  let component: TransactionViewReceiptComponent;
  let fixture: ComponentFixture<TransactionViewReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionViewReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionViewReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
