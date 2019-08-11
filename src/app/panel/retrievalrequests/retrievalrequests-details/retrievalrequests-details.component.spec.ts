import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RetrievalRequestsDetailsComponent} from './retrievalrequests-details.component';

describe('RetrievalRequestsDetailsComponent', () => {
  let component: RetrievalRequestsDetailsComponent;
  let fixture: ComponentFixture<RetrievalRequestsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrievalRequestsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrievalRequestsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
