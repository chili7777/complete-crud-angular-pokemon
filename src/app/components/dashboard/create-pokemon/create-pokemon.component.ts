import { Router } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html', 
  styleUrls: ['./create-pokemon.component.sass']
})
export class CreatePokemonComponent implements OnInit {

  form: FormGroup;  

  types: any[] = [
    {value: 'water', viewValue: 'Water'},
    {value: 'fire', viewValue: 'Fire'},
    {value: 'normal', viewValue: 'Normal'},
    {value: 'bug', viewValue: 'Bug'},
    {value: 'poison', viewValue: 'Poison'},
  ];

  constructor(private fb: FormBuilder, private _pokemonService: PokemonsService, private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      type: ['', Validators.required],
      hp: ['', Validators.required],
      attack: ['', Validators.required],
      defense: ['', Validators.required],
    }) 
  }

  ngOnInit(): void {
  }

  addPokemon(){
    const pokemon: Pokemon = {
      name: this.form.value.name,
      image: this.form.value.image,
      type: this.form.value.type,
      hp: this.form.value.hp,
      attack: this.form.value.attack,
      defense: this.form.value.defense,
      idAuthor: 1,
    }

    this._pokemonService.addPokemon(pokemon).subscribe(data=> {
      return data;
    })

    this.router.navigate(['/dashboard/pokemones'])
  }

}
