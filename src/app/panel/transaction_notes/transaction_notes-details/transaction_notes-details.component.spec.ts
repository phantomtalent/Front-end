import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TransactionNotesDetailsComponent} from './transaction_notes-details.component';

describe('TransactionNotesDetailsComponent', () => {
  let component: TransactionNotesDetailsComponent;
  let fixture: ComponentFixture<TransactionNotesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionNotesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionNotesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
