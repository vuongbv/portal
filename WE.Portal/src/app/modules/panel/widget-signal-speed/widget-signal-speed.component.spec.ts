import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSignalSpeedComponent } from './widget-signal-speed.component';

describe('WidgetSignalSpeedComponent', () => {
  let component: WidgetSignalSpeedComponent;
  let fixture: ComponentFixture<WidgetSignalSpeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetSignalSpeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetSignalSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
