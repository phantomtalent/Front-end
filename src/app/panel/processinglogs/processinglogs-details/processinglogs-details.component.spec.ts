import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProcessingLogsDetailsComponent} from './processinglogs-details.component';

describe('ProcessingLogsDetailsComponent', () => {
  let component: ProcessingLogsDetailsComponent;
  let fixture: ComponentFixture<ProcessingLogsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessingLogsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingLogsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
