import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeEpochComponent } from './change-epoch.component';

describe('ChangeEpochComponent', () => {
  let component: ChangeEpochComponent;
  let fixture: ComponentFixture<ChangeEpochComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeEpochComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeEpochComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
