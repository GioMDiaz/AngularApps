import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjerciciosModule } from './ejercicios/ejercicios.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./ejercicios/ejercicios.module').then(m => m.EjerciciosModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
