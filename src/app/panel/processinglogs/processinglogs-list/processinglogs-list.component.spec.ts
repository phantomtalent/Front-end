import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProcessinglogListComponent} from './processinglogs-list.component';

describe('ProcessinglogListComponent', () => {
  let component: ProcessinglogListComponent;
  let fixture: ComponentFixture<ProcessinglogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessinglogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessinglogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
