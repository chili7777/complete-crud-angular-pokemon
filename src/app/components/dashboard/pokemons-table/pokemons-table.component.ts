import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';



@Component({
  selector: 'app-pokemons-table',
  templateUrl: './pokemons-table.component.html',
  styleUrls: ['./pokemons-table.component.sass']
})
export class PokemonsTableComponent implements OnInit {

  pokemonList: Pokemon[] = [];

  displayedColumns: string[] = ['id', 'name','image', 'hp', 'attack', 'defense', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _pokemonService: PokemonsService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){
    this._pokemonService.getPokemons().subscribe(data => {
      this.pokemonList = data;
      this.dataSource = new MatTableDataSource(this.pokemonList);
    })
  }

  deletePokemon(pokemonId:number){
    this._pokemonService.deletePokemon(pokemonId);
    setTimeout(() => {
      this.getPokemons();
    }, 500)
  }

  ngAfterViewInit(){
    if(this.dataSource){
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  


}
