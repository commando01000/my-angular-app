import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private _HttpClient: HttpClient) {}
  getAllRecipes(): Observable<any> {
    return this._HttpClient.get(
      'https://forkify-api.herokuapp.com/api/search?q=pizza'
    );
  }
}
