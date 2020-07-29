import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassApplyComponent } from './pass-apply.component';

describe('PassApplyComponent', () => {
  let component: PassApplyComponent;
  let fixture: ComponentFixture<PassApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
