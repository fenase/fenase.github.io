import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheObjectComponent } from './the-object.component';

describe('TheObjectComponent', () => {
  let component: TheObjectComponent;
  let fixture: ComponentFixture<TheObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TheObjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
