import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-update-pokemon',
  templateUrl: './update-pokemon.component.html',
  styleUrls: ['./update-pokemon.component.sass']
})
export class UpdatePokemonComponent implements OnInit {

  form: FormGroup;  
  image: String ='';
  pokemon: Pokemon = {
    name: 'undefined',
    image: 'undefined',
    type: 'undefined',
    hp: 0,
    attack: 0,
    defense: 0,
    idAuthor: 1
  };

  types: any[] = [
    {value: 'water', viewValue: 'Water'},
    {value: 'fire', viewValue: 'Fire'},
    {value: 'normal', viewValue: 'Normal'},
    {value: 'bug', viewValue: 'Bug'},
    {value: 'poison', viewValue: 'Poison'},
  ];

  constructor(private fb: FormBuilder, private _pokemonService: PokemonsService, private router: ActivatedRoute,private routerRedirect: Router ) {
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
    this.getCurrentPokemon();
  }

  updatePokemon(){
    this._pokemonService.updatePokemon(this.router.snapshot.params['id'], this.form.value).subscribe(data => {
      return data;
    })

    this.routerRedirect.navigate(['/dashboard/pokemones'])
  }

  getCurrentPokemon(){
    this._pokemonService.getCurrentPokemon(this.router.snapshot.params['id']).subscribe(data => {
      this.image = data['image'];
      this.form = new FormGroup({
        name: new FormControl(data['name']),
        image: new FormControl(data['image']),
        type: new FormControl(data['type']),
        attack: new FormControl(data['attack']),
        defense: new FormControl(data['defense']),
        hp: new FormControl(data['hp']),
      })
    })

  }

}
