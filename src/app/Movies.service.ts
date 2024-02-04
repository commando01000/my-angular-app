import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _HttpClient: HttpClient) {}

  getAllMovies(): Observable<any> {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODQ1ZDYxOWQ3ZmEwNmEzMmUwY2Q3OTI2NGRlMGI4ZSIsInN1YiI6IjVmNzc0ZmY4N2I3YjRkMDAzNzY5OTU0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W7WM7d6y5jemb5kNL5ggup_8coWPFAtzNvJSjC5jWMw',
      },
    };
    return this._HttpClient.get(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    );
  }
}
