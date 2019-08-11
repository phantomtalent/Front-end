import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ApiAttemptDetailsComponent} from './apiattempt-details.component';

describe('ApiAttemptDetailsComponent', () => {
  let component: ApiAttemptDetailsComponent;
  let fixture: ComponentFixture<ApiAttemptDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiAttemptDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiAttemptDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
