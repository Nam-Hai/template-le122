import { Component, OnInit } from '@angular/core';
import { menuService } from '../services/menu.service';

@Component({
  selector: 'app-carte-visualisateur',
  templateUrl: './carte-visualisateur.component.html',
  styleUrls: ['./carte-visualisateur.component.scss']
})
export class CarteVisualisateurComponent implements OnInit {

  mainJSON = this.menuService.JSON;

  constructor(private menuService: menuService) {

  }

  ngOnInit(): void {
  }

}
