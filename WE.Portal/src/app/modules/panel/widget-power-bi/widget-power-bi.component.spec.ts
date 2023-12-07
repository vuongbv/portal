import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPowerBiComponent } from './widget-power-bi.component';

describe('PowerBiComponent', () => {
  let component: WidgetPowerBiComponent;
  let fixture: ComponentFixture<WidgetPowerBiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetPowerBiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetPowerBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
