/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RetrievalRequestsFullDetailsComponent } from './retrievalrequests-full-details.component';

describe('RetrievalRequestsFullDetailsComponent', () => {
  let component: RetrievalRequestsFullDetailsComponent;
  let fixture: ComponentFixture<RetrievalRequestsFullDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrievalRequestsFullDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrievalRequestsFullDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
