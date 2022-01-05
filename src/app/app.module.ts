import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuCartesComponent } from './header-menu-cartes/header-menu-cartes.component';
import { CarteMenuComponent } from './carte-menu/carte-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuCartesComponent,
    CarteMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
