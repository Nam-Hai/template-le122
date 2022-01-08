import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horaire-item',
  templateUrl: './horaire-item.component.html',
  styleUrls: ['./horaire-item.component.scss']
})
export class HoraireItemComponent implements OnInit {

  @Input() day!: string;
  @Input() horaire!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
