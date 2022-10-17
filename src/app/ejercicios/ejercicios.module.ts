import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjerciciosRoutingModule } from './ejercicios-routing.module';
import { PrimeModule } from '../prime/prime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { DisplayHideComponent } from './pages/display-hide/display-hide.component';
import { SearchOnTypeComponent } from './pages/search-on-type/search-on-type.component';
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
import { SwitchComponent } from './pages/switch/switch.component';
import { SemaforoComponent } from './pages/switch/components/semaforo/semaforo.component';
import { ControlComponent } from './pages/switch/components/control/control.component';



@NgModule({
  declarations: [
    DisplayHideComponent,
    SearchOnTypeComponent,
    ExternalDataComponent,
    CounterComponent,
    FormComponent,
    TableComponent,
    CrudComponent,
    ComunicationComponent,
    ChildComponent,
    ParentComponent,
    PaisComponent,
    BuscadorComponent,
    SwitchComponent,
    SemaforoComponent,
    ControlComponent,
   
  ],

  imports: [
    CommonModule,
    EjerciciosRoutingModule,
    PrimeModule,
    ReactiveFormsModule,
    FormsModule,
    NgChartsModule,
      ],

      exports: [
   
      ]

})
export class EjerciciosModule { }