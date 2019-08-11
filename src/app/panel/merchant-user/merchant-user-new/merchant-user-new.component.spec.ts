import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MerchantUserNewComponent} from './merchant-user-new.component';

describe('MerchantUserNewComponent', () => {
  let component: MerchantUserNewComponent;
  let fixture: ComponentFixture<MerchantUserNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantUserNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantUserNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
