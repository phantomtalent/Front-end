import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ApiAttemptComponent} from './apiattempt.component';

describe('ApiAttemptComponent', () => {
  let component: ApiAttemptComponent;
  let fixture: ComponentFixture<ApiAttemptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiAttemptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiAttemptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
