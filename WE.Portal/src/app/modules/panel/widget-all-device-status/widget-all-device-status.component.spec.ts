import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetAllDeviceStatusComponent } from './widget-all-device-status.component';

describe('WidgetAllDeviceStatusComponent', () => {
  let component: WidgetAllDeviceStatusComponent;
  let fixture: ComponentFixture<WidgetAllDeviceStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetAllDeviceStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetAllDeviceStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
