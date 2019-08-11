/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Wpf_transactionTransactionLogsComponent } from './wpf_transaction-transaction-logs.component';

describe('WpfTransactionTransactionLogsComponent', () => {
  let component: WpfTransactionTransactionLogsComponent;
  let fixture: ComponentFixture<WpfTransactionTransactionLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpfTransactionTransactionLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpfTransactionTransactionLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
