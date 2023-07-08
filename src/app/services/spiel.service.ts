import { Injectable } from '@angular/core';
import { Player } from '../models/Player';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpielService {
  isFormValid: boolean = false;
  playWithComputer: string = 'Ja';
  myPlayer: Player = {name: '', score: 0};
  cpuPlayer: Player = {name: 'Computer', score: 0};
  players: Player[] = [];
  selectedMaxScore: number | undefined = undefined; 
  apiUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }

  init(){
    this.isFormValid = false;
    this.playWithComputer = 'Ja';
    this.myPlayer = {name: '', score: 0};
    this.cpuPlayer = {name: 'Computer', score: 0};
    this.players = [];
    this.selectedMaxScore = undefined;
  }

  shuffleSpieler()  {
    this.players.sort(() => Math.random() - 0.5);
  }

  getRandomNumbers(): Observable<number[]> {
    return this.http.get(this.apiUrl, { responseType: 'text' }).pipe(
      map(response => response.split('\n').filter(line => line !== '').map(Number))
    );
  }


}
