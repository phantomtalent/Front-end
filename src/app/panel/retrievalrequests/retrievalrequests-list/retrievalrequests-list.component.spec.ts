import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RetrievalRequestsListComponent} from './retrievalrequests-list.component';

describe('RetrievalRequestsListComponent', () => {
  let component: RetrievalRequestsListComponent;
  let fixture: ComponentFixture<RetrievalRequestsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrievalRequestsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrievalRequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
