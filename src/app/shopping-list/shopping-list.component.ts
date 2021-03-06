import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoppingList: ShoppingListService) {
    this.shoppingList.ingredientsChnaged.subscribe((ingredients: Ingredient[] ) => {
      this.ingredients = ingredients;
    });
   }

  ngOnInit() {

    this.ingredients = this.shoppingList.getIngredients();
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
   
  }
}
