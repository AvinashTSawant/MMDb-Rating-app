import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-dispaly',
  templateUrl: './movies-dispaly.component.html',
  styleUrls: ['./movies-dispaly.component.css']
})
export class MoviesDispalyComponent implements OnInit {

  popularMovies: any;
  searchQuery: string = '';
  searchResults: any;
  toggleOn;
 

  constructor(private movieService: MovieService,private _route: Router) {}

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe(data => {
      this.popularMovies = data.results;
    });
    this.toggleOn =true
  }


  search() {
    if (this.searchQuery.trim() !== '') {
      this.movieService.searchMovies(this.searchQuery).subscribe(data => {
        this.searchResults = data.results;
        this.toggleOn =false
        // if(this.searchQuery =" "){
        //   this._route.navigate(['']);
        // }
      });
    }
  }

  
}