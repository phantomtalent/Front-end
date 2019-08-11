import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MerchantUserListComponent} from './merchant-user-list.component';

describe('MerchantUserListComponent', () => {
  let component: MerchantUserListComponent;
  let fixture: ComponentFixture<MerchantUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
