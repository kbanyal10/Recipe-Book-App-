import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChnaged = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){

    this.ingredients.push(ingredient);
    this.ingredientsChnaged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){

    this.ingredients.push(...ingredients);
    this.ingredientsChnaged.emit(this.ingredients.slice());
  }

  
getListNumber(){

  return this.ingredients.length;
}
}
