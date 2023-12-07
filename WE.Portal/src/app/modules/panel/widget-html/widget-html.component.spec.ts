import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetHtmlComponent } from './widget-html.component';

describe('WidgetHtmlComponent', () => {
  let component: WidgetHtmlComponent;
  let fixture: ComponentFixture<WidgetHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetHtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
