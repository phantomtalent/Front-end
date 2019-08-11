import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TopMerchantComponent} from './top-merchant.component';

describe('TopMerchantComponent', () => {
  let component: TopMerchantComponent;
  let fixture: ComponentFixture<TopMerchantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMerchantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
