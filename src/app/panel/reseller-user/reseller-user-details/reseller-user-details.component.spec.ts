import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ResellerUserDetailsComponent} from './reseller-user-details.component';

describe('ResellerUserDetailsComponent', () => {
  let component: ResellerUserDetailsComponent;
  let fixture: ComponentFixture<ResellerUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResellerUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResellerUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
