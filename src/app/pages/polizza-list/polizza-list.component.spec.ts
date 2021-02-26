import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizzaListComponent } from './polizza-list.component';

describe('UserListComponent', () => {
  let component: PolizzaListComponent;
  let fixture: ComponentFixture<PolizzaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolizzaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizzaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
