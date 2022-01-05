import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-menu-section',
  templateUrl: './carte-menu-section.component.html',
  styleUrls: ['./carte-menu-section.component.scss']
})
export class CarteMenuSectionComponent implements OnInit {

  @Input() title!: string;
  @Input() dishJSON!: any;
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
