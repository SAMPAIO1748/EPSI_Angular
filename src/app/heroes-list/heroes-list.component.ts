import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Hero } from '../types/hero.type';
// On doit importer HeroDetailsComponenent pour pouvoir l'utiliser dans HeroListComponent
import { HeroDetailsComponent } from '../hero-details/hero-details.component';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeroDetailsComponent],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent {

  // Notre tableau devient un tableau d'élement de type Hero définit dans hero.types.ts
  heroes: Hero[] = [
    { id : 1, name : "Batman"},
    { id : 2, name : "Superman"},
    { id : 3, name : "Spider-man"},
  ];

  selectedHero?: Hero;

  constructor () {
    //console.log(this.heroes);
  }

  selectHero(hero: Hero){
        this.selectedHero = hero;
        console.log(this.selectedHero);
  }
  


}
