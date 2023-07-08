import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpielService } from 'src/app/services/spiel.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  selectedPlayerCount: number | undefined = undefined; 
  playerCountOptions: number[] = [1, 2, 3]; 
  maxScoreOptions: number[] = [50, 100, 150]; 

  constructor(private router: Router, public playerService: SpielService) {

  }

  onPlayerCountChange(): void {
    this.playerService.players = Array(this.selectedPlayerCount as number +1).fill('').map(() => ({name: '', score: 0}));
  }

  startGame(): void {
    if (this.isFormValid()) {
      this.playerService.shuffleSpieler();
      this.router.navigate(['/spiel']);
    } 
  }

  isFormValid(): boolean {
    if(this.playerService.playWithComputer === 'Ja'){
      this.playerService.isFormValid  = this.playerService.myPlayer.name.length >0 && this.playerService.selectedMaxScore !== undefined;
    }else{
      this.playerService.isFormValid  = this.playerService.players.every(player => player.name.length > 0) && this.playerService.selectedMaxScore !== undefined;
    }
    return  this.playerService.isFormValid ;
  }

}
