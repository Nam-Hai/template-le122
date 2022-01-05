import { Component, OnInit } from '@angular/core';
import { menuService } from '../services/menu.service';

@Component({
  selector: 'app-carte-menu',
  templateUrl: './carte-menu.component.html',
  styleUrls: ['./carte-menu.component.scss']
})
export class CarteMenuComponent implements OnInit {

  menuJSON = this.menuService.menuJSON;

  constructor(private menuService: menuService) {

  }

  ngOnInit(): void {
  }

}
