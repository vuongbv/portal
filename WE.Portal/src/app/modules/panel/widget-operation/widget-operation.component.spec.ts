import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetOperationComponent } from './widget-operation.component';

describe('WidgetOperationComponent', () => {
  let component: WidgetOperationComponent;
  let fixture: ComponentFixture<WidgetOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
