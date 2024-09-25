import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { CommonModule } from '@angular/common'; // Ajout du CommonModule pour ngIf, ngFor
import { Film } from '../model/films';
import { FormsModule } from '@angular/forms';    // Import du FormsModule

@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.css'
})

export class FilmListComponent implements OnInit {
  films: any[] = [];
  newFilmTitle = '';
  newFilmRating = '';
  newFilmDescription = '';  // Champ pour ajouter un film

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.filmService.getFilms().subscribe(films => this.films = films );
  }

  addFilm(): void {
    const newFilm: Film = {
      title: this.newFilmTitle,
      rating: +this.newFilmRating,
      description: this.newFilmDescription
    }
    this.filmService.addFilm(newFilm).subscribe(() => {
      this.films.push(newFilm);
      this.newFilmDescription = '';
      this.newFilmRating = '';
      this.newFilmDescription = '';
    });
  }

  deleteFilm(id: number): void {
    this.filmService.deleteFilm(id).subscribe(() => {
      this.films = this.films.filter(film => film.id != id)
    });
  }
}
