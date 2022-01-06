import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteVisualisateurComponent } from './carte-visualisateur.component';

describe('CarteVisualisateurComponent', () => {
  let component: CarteVisualisateurComponent;
  let fixture: ComponentFixture<CarteVisualisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteVisualisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteVisualisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
