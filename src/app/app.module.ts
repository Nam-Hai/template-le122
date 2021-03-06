import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuCartesComponent } from './header-menu-cartes/header-menu-cartes.component';
import { CarteMenuComponent } from './carte-menu/carte-menu.component';
import { CarteMenuItemComponent } from './carte-menu-item/carte-menu-item.component';
import { CarteMenuSectionComponent } from './carte-menu-section/carte-menu-section.component';
import { menuService } from './services/menu.service';
import { CarteVisualisateurComponent } from './carte-visualisateur/carte-visualisateur.component';
import { HoraireItemComponent } from './horaire-item/horaire-item.component';
import { horaireService } from './services/horaire.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuCartesComponent,
    CarteMenuComponent,
    CarteMenuItemComponent,
    CarteMenuSectionComponent,
    CarteVisualisateurComponent,
    HoraireItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    menuService,
    horaireService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
