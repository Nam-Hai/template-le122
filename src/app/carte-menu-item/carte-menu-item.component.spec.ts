import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteMenuItemComponent } from './carte-menu-item.component';

describe('CarteMenuItemComponent', () => {
  let component: CarteMenuItemComponent;
  let fixture: ComponentFixture<CarteMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteMenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
