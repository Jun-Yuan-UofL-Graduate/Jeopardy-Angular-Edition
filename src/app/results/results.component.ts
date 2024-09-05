import { Component, inject } from '@angular/core';
import { PlayerService } from '../player.service';
@Component({
  selector: 'app-results',
  standalone: true,
  imports: [],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  constructor(){
    console.log('This is the end');
  }
  playerService = inject(PlayerService);
  bestPlayer = this.playerService.bestPlayer();
  tieFlag: boolean = false;
  numPlayers: number = this.playerService.playerArray().length;
  isTie(){
    if(this.playerService.playerArray()[0].score === this.playerService.playerArray()[1].score || 
       this.playerService.playerArray()[0].score === this.playerService.playerArray()[2].score ||
       this.playerService.playerArray()[1].score === this.playerService.playerArray()[2].score){
      this.tieFlag = true;
    }
  }
}
