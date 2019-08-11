import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AcquirerListComponent} from './acquirer-list.component';

describe('CompanyListComponent', () => {
  let component: AcquirerListComponent;
  let fixture: ComponentFixture<AcquirerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcquirerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquirerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
