import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-menu-item',
  templateUrl: './carte-menu-item.component.html',
  styleUrls: ['./carte-menu-item.component.scss']
})
export class CarteMenuItemComponent implements OnInit {

  @Input() dishName!: string;
  @Input() price!: string;
  @Input() note!: string;
  @Input() subTitle!: string;

  noteStatus: boolean = true;
  subTitleStatus!: boolean;

  constructor() {
  
  }

  ngOnInit(): void {
    if(this.note == ""){
      this.noteStatus = false;
    }

    this.isItSubTitle();
  }


  // check si cet item est un titre de sous section.
  isItSubTitle(){
    if (this.subTitle == undefined){
      this.subTitleStatus = false;
    } else {
      this.subTitleStatus = true;
    }
  }
}
