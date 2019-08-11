import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProcessingLogsComponent} from './processinglogs.component';

describe('ProcessingLogsComponent', () => {
  let component: ProcessingLogsComponent;
  let fixture: ComponentFixture<ProcessingLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessingLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
