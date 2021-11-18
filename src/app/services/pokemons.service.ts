import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) {}
  
  getPokemons(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>('https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1');
  }

  deletePokemon(pokemonId:number){
    return this.http.delete('https://pokemon-pichincha.herokuapp.com/pokemons/'+pokemonId)
        .subscribe(() => 'Delete successful');
  }

  addPokemon(pokemon: Pokemon){
    return this.http.post<Pokemon>('https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1', pokemon);
  }

  getCurrentPokemon(pokemonId:number){
    return this.http.get<Pokemon>('https://pokemon-pichincha.herokuapp.com/pokemons/' + pokemonId);
  }

  updatePokemon(pokemonId:number, pokemon: Pokemon){
    return this.http.put<Pokemon>('https://pokemon-pichincha.herokuapp.com/pokemons/' + pokemonId, pokemon);
  }
}
 