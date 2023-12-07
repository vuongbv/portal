import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditLoginComponent } from './audit-login.component';

describe('AuditLoginComponent', () => {
  let component: AuditLoginComponent;
  let fixture: ComponentFixture<AuditLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
