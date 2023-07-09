import { Component } from '@angular/core';
import { SpielService } from 'src/app/services/spiel.service';

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.scss']
})
export class WinComponent {
  constructor(public spielService: SpielService) { }

}
