import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  loadedFeature = 'recipes';

  ngOnInit(): void {
    console.log(this.loadedFeature);
  }

  onNavigate(selectedItem:string){
    this.loadedFeature = selectedItem;
    console.log(this.loadedFeature);
  }
}
