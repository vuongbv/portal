import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetBatchDeviceComponent } from './widget-batch-device.component';

describe('WidgetBatchDeviceComponent', () => {
  let component: WidgetBatchDeviceComponent;
  let fixture: ComponentFixture<WidgetBatchDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetBatchDeviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetBatchDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
