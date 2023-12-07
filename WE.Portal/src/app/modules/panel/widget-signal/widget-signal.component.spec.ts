import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSignalComponent } from './widget-signal.component';

describe('WidgetSignalComponent', () => {
  let component: WidgetSignalComponent;
  let fixture: ComponentFixture<WidgetSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetSignalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
