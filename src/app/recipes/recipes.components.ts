import {Component, OnInit, DoCheck} from '@angular/core'
import {Recipe} from "./recipe.model";

@Component({
  selector:'app-recipes',
  templateUrl:'./recipes.components.html',
  styleUrls:['./recipes.components.css']
})
export class RecipesComponent implements OnInit, DoCheck{

  recipeWasSelected:Recipe;
  showDetails:boolean;

  ngOnInit(): void {
  }

  ngDoCheck(){
    if(this.recipeWasSelected != null){
      this.showDetails = true;
    }
  }

}
