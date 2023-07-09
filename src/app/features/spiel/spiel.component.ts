import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { SpielService } from 'src/app/services/spiel.service';

@Component({
  selector: 'app-spiel',
  templateUrl: './spiel.component.html',
  styleUrls: ['./spiel.component.scss'],
  providers: [MessageService]
})
export class SpielComponent implements OnInit, OnDestroy{
  private subscriptions: Subscription[] = [];

  wuerfel1: string = "assets/1.png";
  wuerfel2: string = "assets/1.png";
  punkte: number = 0;
  cpuPunkte: number = 0;
  indexSpieler: number = 0;


  constructor(private router: Router, public spielService: SpielService, private messageService: MessageService) { }
  
  ngOnInit(): void {
    
  } 

  wuerfeltMitCPU(){

    this.subscriptions.push(
      this.spielService.getRandomNumbersCPU().subscribe(numbers => {
        if (numbers.length === 4) {
          const zufallszahl1 = numbers[0];
          const zufallszahl2 = numbers[1];
          const cpuZufallszahl1  = numbers[2];
          const cpuZufallszahl2 = numbers[3];

          this.punkte = zufallszahl1 + zufallszahl2;
          this.spielService.myPlayer.score += this.punkte;

          this.cpuPunkte = cpuZufallszahl1 + cpuZufallszahl2;
          this.spielService.cpuPlayer.score += this.cpuPunkte;

          this.wuerfel1 = "assets/"+zufallszahl1+".png";
          this.wuerfel2 = "assets/"+zufallszahl2+".png";

          if(zufallszahl1===zufallszahl2){
            this.messageService.add({severity:'success', summary:'Du hast einen Pasch gewürfelt', detail:'Du erhältst plus '+ (zufallszahl1 + zufallszahl2) + ' Punkte'});
            this.spielService.myPlayer.score += (zufallszahl1 + zufallszahl2);
          }

          if(this.spielService.selectedMaxScore!==undefined && (this.spielService.myPlayer.score >= this.spielService.selectedMaxScore)){
            this.spielService.message = `${this.spielService.myPlayer.name}, du hast gewonnen!!`;
            this.spielService.gameOver = true;
            this.router.navigate(['/win']);
          }
          
          if(cpuZufallszahl1===cpuZufallszahl2){
            this.messageService.add({severity:'warn', summary:'CPU hat einen Pasch gewürfelt', detail:'CPU erhält plus '+ (cpuZufallszahl1 + cpuZufallszahl2) + ' Punkte'});
            this.spielService.cpuPlayer.score += (cpuZufallszahl1 + cpuZufallszahl2);
          }
          
          if(this.spielService.selectedMaxScore!==undefined && (this.spielService.cpuPlayer.score >= this.spielService.selectedMaxScore)){
            this.spielService.message = `${this.spielService.myPlayer.name}, du hast verloren!!!`;
            this.spielService.gameOver = true;
            this.router.navigate(['/lost']);
          }

        }
      })
    );
  }

  wuerfelt(){
    this.subscriptions.push(
      this.spielService.getRandomNumbers().subscribe(numbers => {
        if (numbers.length === 2) {
          const zufallszahl1 = numbers[0];
          const zufallszahl2 = numbers[1];
          this.punkte = zufallszahl1 + zufallszahl2;
          this.spielService.players[this.indexSpieler].score += this.punkte;
          this.wuerfel1 = "assets/"+zufallszahl1+".png";
          this.wuerfel2 = "assets/"+zufallszahl2+".png";
          if(zufallszahl1===zufallszahl2){
            this.messageService.add({severity:'success', summary:'Du hast einen Pasch gewürfelt', detail:`${this.spielService.players[this.indexSpieler].name}, du hast einen Pasch gewürfelt (du erhältst plus ${zufallszahl1 + zufallszahl2} Punkte)!!`});
            this.spielService.players[this.indexSpieler].score += (zufallszahl1 + zufallszahl2);
          }

          if(this.spielService.selectedMaxScore!==undefined && (this.spielService.players[this.indexSpieler].score >= this.spielService.selectedMaxScore)){
            this.spielService.message = `${this.spielService.players[this.indexSpieler].name}, du hast gewonnen!!`;
            this.spielService.gameOver = true;
            this.router.navigate(['/win']);
            
          }
          this.indexSpieler = (this.indexSpieler+1) % this.spielService.players.length;
      
        }
      
      })
    );

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }


}
