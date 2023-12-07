import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDeviceStatusComponent } from './all-device-status.component';

describe('AllDeviceStatusComponent', () => {
  let component: AllDeviceStatusComponent;
  let fixture: ComponentFixture<AllDeviceStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDeviceStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDeviceStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
