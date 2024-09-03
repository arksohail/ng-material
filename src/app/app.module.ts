import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { ButtonComponent } from './pages/button/button.component';
import { ButtonToggleComponent } from './pages/button-toggle/button-toggle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicColorsComponent } from './pages/dynamic-colors/dynamic-colors.component';
import { ElevationComponent } from './pages/elevation/elevation.component';
import { RippleComponent } from './pages/ripple/ripple.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BadgeComponent } from './pages/badge/badge.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ButtonComponent,
    ButtonToggleComponent,
    DynamicColorsComponent,
    ElevationComponent,
    RippleComponent,
    MenuComponent,
    BadgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
