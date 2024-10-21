import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnFormattingComponent } from './column-formatting.component';

describe('ColumnFormattingComponent', () => {
  let component: ColumnFormattingComponent;
  let fixture: ComponentFixture<ColumnFormattingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColumnFormattingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnFormattingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
