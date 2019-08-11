import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ResellerUserNewComponent} from './reseller-user-new.component';

describe('ResellerUserNewComponent', () => {
  let component: ResellerUserNewComponent;
  let fixture: ComponentFixture<ResellerUserNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResellerUserNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResellerUserNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
