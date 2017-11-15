import {Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from './../recipe-book/recipe.service';
import {Recipe} from './../recipe-book/recipe.model'

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put(this.url('recipes'), this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get(this.url('recipes'))
    .subscribe(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        this.recipeService.setRecipes(recipes);
      }
    );
  }

  private url(dataNode: string) {
      return `https://angular-4-recipe-book.firebaseio.com/${dataNode}.json`;
  }

}