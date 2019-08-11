import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TopContractComponent} from './top-contract.component';

describe('TopContractComponent', () => {
  let component: TopContractComponent;
  let fixture: ComponentFixture<TopContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
