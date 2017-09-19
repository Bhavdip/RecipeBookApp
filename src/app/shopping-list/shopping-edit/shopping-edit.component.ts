import {Component, OnInit, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingredientName') nameInputRef:ElementRef;
  @ViewChild('ingredientAmount') amountInputRef:ElementRef;

  @Output() newIngredient = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit() {
  }

  onAddNewIngredient(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const ingredient = new Ingredient(ingName,ingAmount);
    this.newIngredient.emit(ingredient);
  }

}
