import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedRecipeItem = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Turkey and Quinoa Meatloaf","Turkey and Quinoa Meatloaf","http://images.media-allrecipes.com/userphotos/560x315/491815.jpg"),
    new Recipe("Spinach Enchiladas","Spinach Enchiladas","http://images.media-allrecipes.com/userphotos/560x315/454897.jpg"),
    new Recipe("Turkey and Quinoa Meatloaf","Turkey and Quinoa Meatloaf","http://images.media-allrecipes.com/userphotos/560x315/491815.jpg"),
    new Recipe("Spinach Enchiladas","Spinach Enchiladas","http://images.media-allrecipes.com/userphotos/560x315/454897.jpg"),
    new Recipe("Turkey and Quinoa Meatloaf","Turkey and Quinoa Meatloaf","http://images.media-allrecipes.com/userphotos/560x315/491815.jpg"),
    new Recipe("Test Enchiladas","Spinach Enchiladas","http://images.media-allrecipes.com/userphotos/560x315/454897.jpg")
  ];

  constructor() {

  }

  ngOnInit() {
  }

  onSelectedItem(argument:Recipe){
    this.selectedRecipeItem.emit(argument);
  }
}
