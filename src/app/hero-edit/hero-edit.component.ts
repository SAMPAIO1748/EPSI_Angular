import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-edit.component.html',
  styleUrl: './hero-edit.component.css'
})
export class HeroEditComponent {

  id;

  constructor(private route: ActivatedRoute){
      this.id = route.snapshot.paramMap.get('id');
      console.log(this.id);
  }

}
