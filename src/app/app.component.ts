import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';

let heroCount = 2;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, HeroesListComponent, HeroDetailsComponent, HeroEditComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour des héros';
  titleStyle = {'fontFamily' : 'Arial', 'font-size' : '6rem'};
  username = "Anonymous";
  heroes = [
    'Batman',
    'Superman',
    'Wonder Woman',
    'Iron Man'
  ];
  heroToAdd = "";

  addHero(){
    heroCount = heroCount + 1;
    this.title = "La tour des " + heroCount + " héros."
  };

  deleteHero() {
    if(heroCount > 2){
      heroCount = heroCount - 1;
      this.title = "La tour des " + heroCount + " héros."
    }else{
      this.title = "La tour des " + heroCount + " héros. Vous ne pouvez plus diminuer le nombre de héros."
    };

  }
     addHeroInArray() {
        //console.log(this.heroToAdd);
        this.heroes.push(this.heroToAdd);
        this.title = "La tour des " + this.heroes.length + " héros.";

  }
}
