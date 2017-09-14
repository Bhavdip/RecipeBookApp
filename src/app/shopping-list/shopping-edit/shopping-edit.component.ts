import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() newIngredient = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit() {
  }

  onAddNewIngredient(ingredientName:HTMLInputElement,amount:HTMLInputElement){
    this.newIngredient.emit(new Ingredient(ingredientName.value,parseInt(amount.value)));
  }

}
