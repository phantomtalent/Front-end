import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ResellerUserListComponent} from './reseller-user-list.component';

describe('ResellerUserListComponent', () => {
  let component: ResellerUserListComponent;
  let fixture: ComponentFixture<ResellerUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResellerUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResellerUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
