import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutofilterComponent } from './autofilter.component';

describe('AutofilterComponent', () => {
  let component: AutofilterComponent;
  let fixture: ComponentFixture<AutofilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutofilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutofilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
