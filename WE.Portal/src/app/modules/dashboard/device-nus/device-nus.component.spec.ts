import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceNusComponent } from './device-nus.component';

describe('DeviceNusComponent', () => {
  let component: DeviceNusComponent;
  let fixture: ComponentFixture<DeviceNusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceNusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceNusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
