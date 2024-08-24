import { Component, inject } from '@angular/core';
import { ScoreService } from '../score.service';
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
  scoreService = inject(ScoreService);
  bestPlayer = this.scoreService.bestPlayer();
  tieFlag: boolean = false;
  numPlayers: number = this.scoreService.finalHope().length;
  isTie(){
    if(this.scoreService.finalHope()[0].score === this.scoreService.finalHope()[1].score || 
       this.scoreService.finalHope()[0].score === this.scoreService.finalHope()[2].score ||
       this.scoreService.finalHope()[1].score === this.scoreService.finalHope()[2].score){
      this.tieFlag = true;
    }
  }
}
