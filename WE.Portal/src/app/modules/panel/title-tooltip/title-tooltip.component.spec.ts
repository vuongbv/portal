import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleTooltipComponent } from './TitleTooltipComponent';

describe('TitleTooltipComponent', () => {
  let component: TitleTooltipComponent;
  let fixture: ComponentFixture<TitleTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleTooltipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
