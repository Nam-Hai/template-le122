import { Component, Input, OnInit } from '@angular/core';
import { menuService } from '../services/menu.service';

@Component({
  selector: 'app-carte-menu',
  templateUrl: './carte-menu.component.html',
  styleUrls: ['./carte-menu.component.scss']
})
export class CarteMenuComponent implements OnInit {

  @Input() headerTitle!: string;
  @Input() currentJSON!: any;

  constructor() {

  }

  ngOnInit(): void {
  }

}
