import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditAlarmComponent } from './audit-alarm.component';

describe('AuditAlarmComponent', () => {
  let component: AuditAlarmComponent;
  let fixture: ComponentFixture<AuditAlarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditAlarmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
