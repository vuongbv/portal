import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetBulletComponent } from './widget-bullet.component';

describe('WidgetBulletComponent', () => {
  let component: WidgetBulletComponent;
  let fixture: ComponentFixture<WidgetBulletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetBulletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetBulletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
