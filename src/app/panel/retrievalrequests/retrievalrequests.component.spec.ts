import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RetrievalRequestsComponent} from './retrievalrequests.component';

describe('RetrievalRequestsComponent', () => {
  let component: RetrievalRequestsComponent;
  let fixture: ComponentFixture<RetrievalRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrievalRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrievalRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
