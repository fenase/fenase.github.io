import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideSheetComponent } from './hide-sheet.component';

describe('HideSheetComponent', () => {
  let component: HideSheetComponent;
  let fixture: ComponentFixture<HideSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HideSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HideSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
