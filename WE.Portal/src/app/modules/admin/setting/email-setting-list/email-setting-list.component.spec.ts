import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSettingListComponent } from './email-setting-list.component';

describe('EmailSettingListComponent', () => {
  let component: EmailSettingListComponent;
  let fixture: ComponentFixture<EmailSettingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailSettingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailSettingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
