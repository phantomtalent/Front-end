import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TopTerminalComponent} from './top-terminal.component';

describe('TopTerminalComponent', () => {
  let component: TopTerminalComponent;
  let fixture: ComponentFixture<TopTerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTerminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
