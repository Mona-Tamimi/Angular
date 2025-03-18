import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructrualComponent } from './structrual.component';

describe('StructrualComponent', () => {
  let component: StructrualComponent;
  let fixture: ComponentFixture<StructrualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructrualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructrualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
