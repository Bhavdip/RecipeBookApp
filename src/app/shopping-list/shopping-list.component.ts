import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[] = [
    new Ingredient("Apples",100),
    new Ingredient("Bread",100),
    new Ingredient("Tomato",100)
  ];


  constructor() { }

  ngOnInit() {
  }

  insertNewIngredient(nwItem:Ingredient){
    this.ingredients.push(nwItem);
  }

}
