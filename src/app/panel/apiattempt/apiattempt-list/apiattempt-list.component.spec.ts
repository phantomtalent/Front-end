import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ApiAttemptListComponent} from './apiattempt-list.component';

describe('ApiAttemptListComponent', () => {
  let component: ApiAttemptListComponent;
  let fixture: ComponentFixture<ApiAttemptListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiAttemptListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiAttemptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
