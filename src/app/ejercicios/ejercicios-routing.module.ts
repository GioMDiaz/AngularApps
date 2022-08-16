import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunicationComponent } from './pages/comunication/comunication.component';
import { CounterComponent } from './pages/counter/counter.component';
import { CrudComponent } from './pages/crud/crud.component';
import { DisplayHideComponent } from './pages/display-hide/display-hide.component';
import { ExternalDataComponent } from './pages/external-data/external-data.component';
import { LightSwitchComponent } from './pages/light-switch/light-switch.component';
import { SearchOnTypeComponent } from './pages/search-on-type/search-on-type.component';

const routes: Routes = [
  {
    path: 'ejercicios',
    children: [
      {path: 'comunication', component: ComunicationComponent},
      {path: 'counter', component: CounterComponent},
      {path: 'crud', component: CrudComponent},
      {path: 'display-hide', component: DisplayHideComponent},
      {path: 'external-data', component: ExternalDataComponent},
      {path: 'light-switch', component: LightSwitchComponent},
      {path: 'search-on-type', component: SearchOnTypeComponent},
      {path: '**', redirectTo: 'comunication'},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjerciciosRoutingModule { }
