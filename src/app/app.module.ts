import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuCartesComponent } from './header-menu-cartes/header-menu-cartes.component';
import { CarteMenuComponent } from './carte-menu/carte-menu.component';
import { CarteMenuItemComponent } from './carte-menu-item/carte-menu-item.component';
import { CarteMenuSectionComponent } from './carte-menu-section/carte-menu-section.component';
import { menuService } from './services/menu.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuCartesComponent,
    CarteMenuComponent,
    CarteMenuItemComponent,
    CarteMenuSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    menuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
