import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizzaCardComponent } from './polizza-card.component';

describe('PolizzaCardComponent', () => {
  let component: PolizzaCardComponent;
  let fixture: ComponentFixture<PolizzaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolizzaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizzaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
