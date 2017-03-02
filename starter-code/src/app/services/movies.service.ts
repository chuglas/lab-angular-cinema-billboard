import { Injectable } from '@angular/core';
import movies from '../movies';


@Injectable()
export class MovieList {

  movieList: Array<any> = movies;

  constructor() { }

  ngOnInit() {
    console.log(this.movieList)
  }


  getMovies() {
    console.log(this.movieList);
    console.log('also working?')
    return this.movieList;
  }

  getMovie(id) {
    return
  }
// Add a getMovie(id) method, that receives a number id as a parameter
//and returns an object from the Movies array.

}
