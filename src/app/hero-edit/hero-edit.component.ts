import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../types/hero.type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-edit.component.html',
  styleUrl: './hero-edit.component.css'
})
export class HeroEditComponent {

  id;
  hero?: Hero;

  constructor(private route: ActivatedRoute, private herosService: HeroService){
      this.id = route.snapshot.paramMap.get('id');
      // console.log(this.id);
  }

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hero = this.herosService.getHeroById(id);
    console.log(this.hero);
  }

}
