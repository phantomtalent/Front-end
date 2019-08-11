import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TaskLogsListComponent} from './tasklogs-list.component';

describe('TaskLogsListComponent', () => {
  let component: TaskLogsListComponent;
  let fixture: ComponentFixture<TaskLogsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskLogsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskLogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
