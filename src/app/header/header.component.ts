import { Component, EventEmitter, Output } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  numberOfIngredients: number = this.shoppingList.ingredients.length;

  constructor(private shoppingList: ShoppingListService) { 

    this.shoppingList.ingredientsChnaged.subscribe((ingredient: Ingredient[]) => {
      this.numberOfIngredients = ingredient.length});
   }
  }
  

  

