import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BlacklistListComponent} from './blacklist-list.component';

describe('BlacklistListComponent', () => {
  let component: BlacklistListComponent;
  let fixture: ComponentFixture<BlacklistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlacklistListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlacklistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
