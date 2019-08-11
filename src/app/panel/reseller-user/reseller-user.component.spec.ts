import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ResellerUserComponent} from './reseller-user.component';

describe('ResellerUserComponent', () => {
  let component: ResellerUserComponent;
  let fixture: ComponentFixture<ResellerUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResellerUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResellerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
