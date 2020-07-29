import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassCancelComponent } from './pass-cancel.component';

describe('PassCancelComponent', () => {
  let component: PassCancelComponent;
  let fixture: ComponentFixture<PassCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
