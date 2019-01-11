import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schintzel!',
      'https://thecozyapron.com/wp-content/uploads/2012/02/schnitzel_thecozyapron_1.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]
    ),
    new Recipe(
      'Big Fat Burger',
      'Need to say more?!',
      `https://sallysbakingaddiction.com/wp-content/uploads/2018/07/best-black-bean-burgers-2.jpg`,
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();  // return byValue recipes array not byRef
  }
  
  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
