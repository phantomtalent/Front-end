import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TaskLogsDetailsComponent} from './tasklogs-details.component';

describe('TaskLogsDetailsComponent', () => {
  let component: TaskLogsDetailsComponent;
  let fixture: ComponentFixture<TaskLogsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskLogsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskLogsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
