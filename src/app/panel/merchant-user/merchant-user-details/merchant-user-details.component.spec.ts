import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MerchantUserDetailsComponent} from './merchant-user-details.component';

describe('MerchantUserDetailsComponent', () => {
  let component: MerchantUserDetailsComponent;
  let fixture: ComponentFixture<MerchantUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
