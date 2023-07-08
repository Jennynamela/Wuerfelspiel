import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpielService } from 'src/app/services/spiel.service';

@Component({
  selector: 'app-spiel',
  templateUrl: './spiel.component.html',
  styleUrls: ['./spiel.component.scss']
})
export class SpielComponent implements OnInit{
  wuerfel1: string = "assets/1.png";
  wuerfel2: string = "assets/1.png";
  punkte: number = 0;
  cpuPunkte: number = 0;
  indexSpieler: number = 0;


  constructor(private route: ActivatedRoute, private router: Router, public spielService: SpielService) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      const state = window.history.state; // State aus der vorherigen Route lesen
  
      if (state && state.players && state.maxScore) {
        const players = state.players; // Spieler aus dem State lesen
        const maxScore = state.maxScore; // Maximaler Punktestand aus dem State lesen
  
        // Verwenden Sie die Spieler und den maximalen Punktestand nach Bedarf
        console.log('Spieler:', players);
        console.log('Maximaler Punktestand:', maxScore);
      }
    });
  }

  wuerfeltMitCPU(){

    this.spielService.getRandomNumbers().subscribe(numbers => {
      if (numbers.length === 2) {
        const zufallszahl1 = numbers[0];
        const zufallszahl2 = numbers[1];
        this.punkte = zufallszahl1 + zufallszahl2;
        this.spielService.myPlayer.score += this.punkte;
        this.wuerfel1 = "assets/"+zufallszahl1+".png";
        this.wuerfel2 = "assets/"+zufallszahl2+".png";
        if(this.spielService.selectedMaxScore!==undefined && (this.spielService.myPlayer.score >= this.spielService.selectedMaxScore)){
          alert(this.spielService.myPlayer.name+", du hast mit "+this.spielService.myPlayer.score+" Punkte gewonnen");
          this.router.navigate(['/start']);
          this.spielService.init();
        }
      }
    });
    this.spielService.getRandomNumbers().subscribe(numbers => {
      if (numbers.length === 2) {
        const cpuZufallszahl1  = numbers[0];
        const cpuZufallszahl2 = numbers[1];
        this.cpuPunkte = cpuZufallszahl1 + cpuZufallszahl2;
        this.spielService.cpuPlayer.score += this.cpuPunkte;
        
        if(this.spielService.selectedMaxScore!==undefined && (this.spielService.cpuPlayer.score >= this.spielService.selectedMaxScore)){
          alert("Computer hat mit "+this.spielService.cpuPlayer.score+" Punkte gewonnen");
          this.spielService.init();
          this.router.navigate(['/start']);
        }
        
      }
    });
  }

  wuerfelt(){
    const zufallszahl1 = Math.floor(Math.random() * 6) + 1;
    const zufallszahl2 = Math.floor(Math.random() * 6) + 1;
    this.punkte = zufallszahl1 + zufallszahl2;
    this.spielService.players[this.indexSpieler].score += this.punkte;
    this.wuerfel1 = "assets/"+zufallszahl1+".png";
    this.wuerfel2 = "assets/"+zufallszahl2+".png";
    if(this.spielService.selectedMaxScore!==undefined && (this.spielService.players[this.indexSpieler].score >= this.spielService.selectedMaxScore)){
      alert(this.spielService.players[this.indexSpieler].name+", du hast mit "+this.spielService.players[this.indexSpieler].score+" Punkte gewonnen");
      this.router.navigate(['/start']);
      this.spielService.init();
    }

    this.indexSpieler = (this.indexSpieler+1) % this.spielService.players.length;

  }

}
