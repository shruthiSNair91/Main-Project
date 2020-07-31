import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPassComponent } from './my-pass.component';

describe('MyPassComponent', () => {
  let component: MyPassComponent;
  let fixture: ComponentFixture<MyPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
