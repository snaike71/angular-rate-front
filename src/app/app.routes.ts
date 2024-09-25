import { Routes } from '@angular/router';
import { FilmListComponent } from './film-list/film-list.component';
import { AboutComponent } from './about/about.component';
export const routes: Routes = [  
    { path: '', redirectTo: 'films', pathMatch: 'full' },  // Redirection vers la page des films par défaut
    { path: 'films', component: FilmListComponent },  // Route pour la liste des films
    { path: 'about', component: AboutComponent },  // Route pour la liste des films

];
