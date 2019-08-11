import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ResellerNewComponent} from './reseller-new.component';

describe('ResellerNewComponent', () => {
  let component: ResellerNewComponent;
  let fixture: ComponentFixture<ResellerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResellerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResellerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
