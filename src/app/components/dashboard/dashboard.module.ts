import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ModulesModule } from '../modules/modules.module';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonsTableComponent } from './pokemons-table/pokemons-table.component';
import { CreatePokemonComponent } from './create-pokemon/create-pokemon.component';
import { UpdatePokemonComponent } from './update-pokemon/update-pokemon.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PokedexComponent,
    NavbarComponent,
    PokemonsComponent,
    PokemonsTableComponent,
    CreatePokemonComponent,
    UpdatePokemonComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ModulesModule,
    MaterialModule
  ]
})
export class DashboardModule { }
