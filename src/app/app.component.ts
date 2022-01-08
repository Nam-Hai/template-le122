import { Component } from '@angular/core';
import { horaireService } from './services/horaire.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-template';


  constructor(private horaireService: horaireService) {
  }

  horaireJSON = this.horaireService.horaireJSON;
}
