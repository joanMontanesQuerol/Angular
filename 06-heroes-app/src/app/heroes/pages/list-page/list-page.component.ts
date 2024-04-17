import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { FormControl } from '@angular/forms';

interface SortOptions {
  label: string;
  value: string;
}

@Component({
  selector: 'hero-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit{
  public heroes: Hero[] = [];

  public selectedOption?: string;

  public name = new FormControl('bySuperhero');


  constructor(private heroesService: HeroesService){}

  ngOnInit(): void{
    this.heroesService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  changeSort(){
      if(this.name.value) this.selectedOption = this.name.value;
      console.log(this.selectedOption);
      console.log(this.name.value);
  }
}

