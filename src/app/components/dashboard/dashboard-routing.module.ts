import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonsTableComponent } from './pokemons-table/pokemons-table.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatePokemonComponent } from './update-pokemon/update-pokemon.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: '', component: PokedexComponent},
    { path: 'pokemones', component: PokedexComponent},
    { path: 'pokemones-table', component: PokemonsTableComponent},
    { path: 'update-pokemon/:id', component: UpdatePokemonComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
