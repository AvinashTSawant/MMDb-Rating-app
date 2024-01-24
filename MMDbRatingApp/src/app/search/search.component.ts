import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchQuery: string = '';
  searchResults: any;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    
  }

  search() {
    if (this.searchQuery.trim() !== '') {
      this.movieService.searchMovies(this.searchQuery).subscribe(data => {
        this.searchResults = data.results;
      });
    }
  }
}
