import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sun233Component } from './sun23-3.component';

describe('Sun233Component', () => {
  let component: Sun233Component;
  let fixture: ComponentFixture<Sun233Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sun233Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sun233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
