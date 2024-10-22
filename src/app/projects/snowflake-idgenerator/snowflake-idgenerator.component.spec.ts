import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowflakeIDGeneratorComponent } from './snowflake-idgenerator.component';

describe('SnowflakeIDGeneratorComponent', () => {
  let component: SnowflakeIDGeneratorComponent;
  let fixture: ComponentFixture<SnowflakeIDGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnowflakeIDGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnowflakeIDGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
