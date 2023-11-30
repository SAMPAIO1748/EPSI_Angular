import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Hero } from '../types/hero.type';
// On doit importer HeroDetailsComponenent pour pouvoir l'utiliser dans HeroListComponent
import { HeroDetailsComponent } from '../hero-details/hero-details.component';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeroDetailsComponent],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent {

  // Notre tableau devient un tableau d'élement de type Hero définit dans hero.types.ts
  heroes?: Hero[] 

  selectedHero?: Hero;

  constructor (private heroService: HeroService) {
    //console.log(this.heroes);
  }

  ngOnInit(){
    this.heroes = this.heroService.getHeroes();
  }

  selectHero(hero: Hero){
        this.selectedHero = hero;
        console.log(this.selectedHero);
  }
  


}
