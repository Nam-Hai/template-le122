import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteMenuSectionComponent } from './carte-menu-section.component';

describe('CarteMenuSectionComponent', () => {
  let component: CarteMenuSectionComponent;
  let fixture: ComponentFixture<CarteMenuSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteMenuSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteMenuSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
