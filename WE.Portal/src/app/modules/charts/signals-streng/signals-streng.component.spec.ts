import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsStrengComponent } from './signals-streng.component';

describe('SignalsStrengComponent', () => {
  let component: SignalsStrengComponent;
  let fixture: ComponentFixture<SignalsStrengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalsStrengComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsStrengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
