import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunicationComponent } from './pages/comunication/comunication.component';
import { CounterComponent } from './pages/counter/counter.component';
import { DisplayHideComponent } from './pages/display-hide/display-hide.component';
import { ExternalDataComponent } from './pages/external-data/external-data.component';
import { SearchOnTypeComponent } from './pages/search-on-type/search-on-type.component';
import { CrudComponent } from './pages/crud/crud.component';
import { SwitchComponent } from './pages/switch/switch.component';
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [
  {
    path: 'menu',
    children: [
      {path: 'crud', component: CrudComponent},
      {path: 'comunication', component: ComunicationComponent},
      {path: 'counter', component: CounterComponent},
      {path: 'display', component: DisplayHideComponent},
      {path: 'external', component: ExternalDataComponent},
      {path: 'switch', component: SwitchComponent},
      {path: 'search', component: SearchOnTypeComponent},
      {path: '**', redirectTo: ''},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjerciciosRoutingModule { }
