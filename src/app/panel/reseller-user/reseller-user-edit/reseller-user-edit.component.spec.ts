import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ResellerUserEditComponent} from './reseller-user-edit.component';

describe('ResellerUserEditComponent', () => {
  let component: ResellerUserEditComponent;
  let fixture: ComponentFixture<ResellerUserEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResellerUserEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResellerUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
