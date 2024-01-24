import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieDetails: any;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const movieId = Number(params.get('id'));
      this.movieService.getMovieDetails(movieId).subscribe(data => {
        this.movieDetails = data;
      });
    });
  }
}