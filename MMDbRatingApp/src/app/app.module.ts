import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesDispalyComponent } from './movies-dispaly/movies-dispaly.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

// const routes: Routes = [
//   { path: '', component: MoviesDispalyComponent },
//   { path: 'search', component: SearchComponent },
//   { path: 'movie/:id', component: MovieDetailsComponent },
//   { path: '**', redirectTo: '' } // Redirect to home for any other route
// ];

@NgModule({
  declarations: [
    AppComponent,
    MoviesDispalyComponent,
    SearchComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
