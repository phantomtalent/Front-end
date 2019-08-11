import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MerchantNewComponent} from './merchant-new.component';

describe('MerchantNewComponent', () => {
  let component: MerchantNewComponent;
  let fixture: ComponentFixture<MerchantNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
