import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FilmListComponent } from "./film-list/film-list.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FilmListComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'films-ratings-frontend';
}
