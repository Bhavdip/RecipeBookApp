import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector:'app-header',
  templateUrl:'./header.component.html',
  styleUrls:['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @Output('active_menu') featuredSelected = new EventEmitter<string>();

  constructor(){
  }

  ngOnInit(): void {
  }

  onSelect(argument:string){
    console.log(argument);
    this.featuredSelected.emit(argument);
  }
}
