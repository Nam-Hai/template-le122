import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuCartesComponent } from './header-menu-cartes.component';

describe('HeaderMenuCartesComponent', () => {
  let component: HeaderMenuCartesComponent;
  let fixture: ComponentFixture<HeaderMenuCartesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMenuCartesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMenuCartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
