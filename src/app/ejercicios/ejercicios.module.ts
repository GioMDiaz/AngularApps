import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjerciciosRoutingModule } from './ejercicios-routing.module';
import { DisplayHideComponent } from './pages/display-hide/display-hide.component';
import { ComunicationComponent } from './pages/comunication/comunication.component';
import { CrudComponent } from './pages/crud/crud.component';
import { SearchOnTypeComponent } from './pages/search-on-type/search-on-type.component';
import { LightSwitchComponent } from './pages/light-switch/light-switch.component';
import { ExternalDataComponent } from './pages/external-data/external-data.component';
import { CounterComponent } from './pages/counter/counter.component';
import { PrimeModule } from '../prime/prime.module';


@NgModule({
  declarations: [
    DisplayHideComponent,
    ComunicationComponent,
    CrudComponent,
    SearchOnTypeComponent,
    LightSwitchComponent,
    ExternalDataComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    EjerciciosRoutingModule,
    PrimeModule
    
  ]
})
export class EjerciciosModule { }
