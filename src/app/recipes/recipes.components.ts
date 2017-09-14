import {Component, OnInit} from '@angular/core'
import {Recipe} from "./recipe.model";

@Component({
  selector:'app-recipes',
  templateUrl:'./recipes.components.html',
  styleUrls:['./recipes.components.css']
})
export class RecipesComponent implements OnInit{

  recipeWasSelected:Recipe;

  ngOnInit(): void {

  }
}
