
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePokemonComponent } from './components/dashboard/create-pokemon/create-pokemon.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login' , component: LoginComponent},
  { path: 'dashboard' , loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule)},
  { path: 'dashboard/crear-pokemon' , component: CreatePokemonComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
