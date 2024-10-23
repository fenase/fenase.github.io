import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateStaticComponent } from './generate-static.component';

describe('GenerateStaticComponent', () => {
  let component: GenerateStaticComponent;
  let fixture: ComponentFixture<GenerateStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerateStaticComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
