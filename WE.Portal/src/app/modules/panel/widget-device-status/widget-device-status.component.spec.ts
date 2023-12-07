import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDeviceStatusComponent } from './widget-device-status.component';

describe('WidgetDeviceStatusComponent', () => {
  let component: WidgetDeviceStatusComponent;
  let fixture: ComponentFixture<WidgetDeviceStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetDeviceStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetDeviceStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
