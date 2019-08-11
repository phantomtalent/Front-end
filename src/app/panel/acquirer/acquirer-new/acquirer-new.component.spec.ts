import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AcquirerNewComponent} from './acquirer-new.component';

describe('AcquirerNewComponent', () => {
  let component: AcquirerNewComponent;
  let fixture: ComponentFixture<AcquirerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcquirerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquirerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
