import { Component } from '@angular/core';
import { SpielService } from 'src/app/services/spiel.service';

@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styleUrls: ['./lost.component.scss']
})
export class LostComponent {
  constructor(public spielService: SpielService) { }

}
