import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventLogsListComponent} from './eventlogs-list.component';

describe('EventLogsListComponent', () => {
  let component: EventLogsListComponent;
  let fixture: ComponentFixture<EventLogsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventLogsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
