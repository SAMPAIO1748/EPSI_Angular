import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../types/hero.type';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.css'
})
export class HeroDetailsComponent {

 @Input() hero?: Hero;

}
