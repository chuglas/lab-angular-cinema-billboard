import { Component, OnInit } from '@angular/core';
import { MovieList } from '../services/movies.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css'],
  providers: [MovieList]
})
export class MyHomeComponent implements OnInit {

  constructor(public movies: MovieList) { }

  ngOnInit() {

  }

  printMovieList() {
    this.movies.getMovies();
    console.log('workin?')
  }


}
