import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditRoleComponent } from './audit-role.component';

describe('AuditRoleComponent', () => {
  let component: AuditRoleComponent;
  let fixture: ComponentFixture<AuditRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditRoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
