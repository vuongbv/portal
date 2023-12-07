import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetBatteryLevelComponent } from './widget-battery-level.component';

describe('WidgetBatteryLevelComponent', () => {
  let component: WidgetBatteryLevelComponent;
  let fixture: ComponentFixture<WidgetBatteryLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetBatteryLevelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetBatteryLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
