import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventLogsDetailsComponent} from './eventlogs-details.component';

describe('EventLogsDetailsComponent', () => {
  let component: EventLogsDetailsComponent;
  let fixture: ComponentFixture<EventLogsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventLogsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLogsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
