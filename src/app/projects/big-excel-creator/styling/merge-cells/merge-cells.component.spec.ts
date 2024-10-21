import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeCellsComponent } from './merge-cells.component';

describe('MergeCellsComponent', () => {
  let component: MergeCellsComponent;
  let fixture: ComponentFixture<MergeCellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MergeCellsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergeCellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
