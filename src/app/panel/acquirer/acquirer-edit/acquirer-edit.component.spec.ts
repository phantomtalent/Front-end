import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AcquirerEditComponent} from './acquirer-edit.component';

describe('AcquirerEditComponent', () => {
  let component: AcquirerEditComponent;
  let fixture: ComponentFixture<AcquirerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcquirerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquirerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
