import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPassComponent } from './show-pass.component';

describe('ShowPassComponent', () => {
  let component: ShowPassComponent;
  let fixture: ComponentFixture<ShowPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
