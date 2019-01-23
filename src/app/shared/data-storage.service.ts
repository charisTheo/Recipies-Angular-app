import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://angularjs-udemy.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  fetchRecipes() {
    this.http.get('https://angularjs-udemy.firebaseio.com/recipes.json')
      .subscribe(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          console.log(recipes);
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
