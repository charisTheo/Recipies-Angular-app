import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push.apply(this.ingredients, ingredients);
  }

  getIngredients() {
    return this.ingredients;
  }
}
