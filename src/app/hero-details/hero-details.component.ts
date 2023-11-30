import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../types/hero.type';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.css'
})
export class HeroDetailsComponent {

 @Input() hero?: Hero;

}
