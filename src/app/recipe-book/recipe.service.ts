import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Sushi', 
      'Colourful raw fish and rice dish', 
      'https://www.race.es/revista-autoclub/wp-content/uploads/sites/4/2016/09/sushi-un-placer-de-los-ancestros-8.jpg',
      [
        new Ingredient('Rice', 300),
        new Ingredient('Soy Sauce', 1),
        new Ingredient('Salmon', 150)
      ]
      )
    ,
    new Recipe(
      'Chicken katsu', 
      'Fried sweet chicken', 
      'http://www.seriouseats.com/images/2017/02/20170125-tonkatsu-japanese-pork-chicken-katsu-cutlet-recipe-21.jpg',
      [
        new Ingredient('Chicken', 400),
        new Ingredient('Sugar', 100),
        new Ingredient('Flour', 100)
      ]
    ),
    new Recipe(
      'Curry udon', 
      'Spicy pasta with vegetables', 
      'https://3minramen.files.wordpress.com/2013/03/1-dsc_1662.jpg',
      [
        new Ingredient('Udon', 300),
        new Ingredient('Curry', 80),
        new Ingredient('Pepper', 150)
      ]
    )
  ];

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
}