import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrimeModule } from './prime/prime.module';
import { MenuComponent } from './ejercicios/pages/menu/menu.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent

  ],

  exports:[
    HttpClientModule,
    PrimeModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    PrimeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
