import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokemonsService } from './../../../services/pokemons.service';
import { Pokemon } from './../../../interfaces/pokemon';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.sass']
})
export class PokedexComponent implements OnInit , OnDestroy{

  pokemons: Pokemon[] = [];
  pokemonsFiltering: Pokemon[] =[];
  mediaSub: Subscription | undefined;
  deviceXs: boolean = false;


  constructor(private _pokemonService: PokemonsService, public mediaObserver: MediaObserver) { }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange) => {
      console.log(result.mqAlias);
      this.deviceXs = result.mqAlias === 'xs' ? true : false;
    })
    this.getPokemons();
  }
  ngOnDestroy(): void{
    this.mediaSub?.unsubscribe();
  }

  getPokemons(){
    this._pokemonService.getPokemons().subscribe(data => {
      this.pokemons = data;
      this.pokemonsFiltering = data;
    })

  }

  deletePokemon(pokemonId?:number){
    if(pokemonId){
      this._pokemonService.deletePokemon(pokemonId);
      setTimeout(() => {
        this.getPokemons();
      }, 500)
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.pokemonsFiltering = this.pokemons.filter(word => {
      return word.name.trim().toLowerCase().includes(filterValue.trim().toLowerCase());
    });
  }

}
