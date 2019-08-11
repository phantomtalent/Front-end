import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MerchantUserEditComponent} from './merchant-user-edit.component';

describe('MerchantUserEditComponent', () => {
  let component: MerchantUserEditComponent;
  let fixture: ComponentFixture<MerchantUserEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantUserEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
