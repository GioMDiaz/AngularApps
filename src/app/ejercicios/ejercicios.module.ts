import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjerciciosRoutingModule } from './ejercicios-routing.module';
import { PrimeModule } from '../prime/prime.module';
import { MaterialCrudModule } from './pages/crud/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DisplayHideComponent } from './pages/display-hide/display-hide.component';
import { SearchOnTypeComponent } from './pages/search-on-type/search-on-type.component';
import { LightSwitchComponent } from './pages/light-switch/light-switch.component';
import { ExternalDataComponent } from './pages/external-data/external-data.component';
import { CounterComponent } from './pages/counter/counter.component';
import { FormComponent } from './pages/crud/components/form/form.component';
import { TableComponent } from './pages/crud/components/table/table.component';
import { CrudComponent } from './pages/crud/crud.component';
import { ComunicationComponent } from './pages/comunication/comunication.component';
import { ChildComponent } from './pages/comunication/components/child/child.component';
import { ParentComponent } from './pages/comunication/components/parent/parent.component';
import { BuscadorComponent } from './pages/search-on-type/components/buscador/buscador.component';
import { PaisComponent } from './pages/search-on-type/components/pais/pais.component';

@NgModule({
  declarations: [
    DisplayHideComponent,
    SearchOnTypeComponent,
    LightSwitchComponent,
    ExternalDataComponent,
    CounterComponent,
    FormComponent,
    TableComponent,
    CrudComponent,
    ComunicationComponent,
    ChildComponent,
    ParentComponent,
    PaisComponent,
    BuscadorComponent
  ],

  imports: [
    CommonModule,
    EjerciciosRoutingModule,
    PrimeModule,
    MaterialCrudModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class EjerciciosModule { }