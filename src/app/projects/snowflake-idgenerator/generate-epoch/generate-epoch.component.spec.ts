import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateEpochComponent } from './generate-epoch.component';

describe('GenerateEpochComponent', () => {
  let component: GenerateEpochComponent;
  let fixture: ComponentFixture<GenerateEpochComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerateEpochComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateEpochComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
