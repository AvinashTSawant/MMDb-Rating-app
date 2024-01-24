import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesDispalyComponent } from './movies-dispaly/movies-dispaly.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: '', component: MoviesDispalyComponent },
  { path: 'search', component: SearchComponent },
  { path: 'movieDetails/:id', component: MovieDetailsComponent },
  { path: '**', redirectTo: '' } // Redirect to home for any other route
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
