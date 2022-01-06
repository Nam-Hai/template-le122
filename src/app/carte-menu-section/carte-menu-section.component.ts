import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-menu-section',
  templateUrl: './carte-menu-section.component.html',
  styleUrls: ['./carte-menu-section.component.scss']
})
export class CarteMenuSectionComponent implements OnInit {

  @Input() title!: string;
  @Input() dishJSON!: any;
  @Input() titleNote?: string;
  
  titleNoteStatus: boolean = true;
  constructor() { }

  ngOnInit(): void {
    if (this.titleNote == ""){
      this.titleNoteStatus = false;
    }
  }


  
}
