import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BlacklistNewComponent} from './blacklist-new.component';

describe('BlacklistNewComponent', () => {
  let component: BlacklistNewComponent;
  let fixture: ComponentFixture<BlacklistNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlacklistNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlacklistNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
