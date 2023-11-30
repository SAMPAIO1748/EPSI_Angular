import { Routes } from '@angular/router';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';

export const routes: Routes = [
    {
        path: "",
        component: HeroesListComponent
    },
    {
       path: 'edit/:id',
       component: HeroEditComponent 
    }
];
