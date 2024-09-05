import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerHeaderComponent } from '../player-header/player-header.component';
import { PlayerService } from '../player.service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { QuestionList } from '../questionList';
import { TimerService } from '../timer.service';
@Component({
  selector: 'app-final',
  standalone: true,
  imports: [
    PlayerHeaderComponent,
    CommonModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './final.component.html',
  styleUrl: './final.component.css'
})
export class FinalComponent {
  constructor(private router: Router){
    //console.log(this.dataSource);
    //console.log(this.players);
    this.timerService.stopInterval();
    this.playerService.selectFinalPlayers();
    for(let i = 0; i < this.players.length; i++){
      this.wagerArray[i] = 0;
      this.answerArray[i] = '';
    }
    console.log(this.wagerArray);
    console.log(this.answerArray);
  }

  playerService = inject(PlayerService);
  timerService = inject(TimerService);
  players = this.playerService.playerArray();
  wagerArray: number[] = [];
  answerArray: string[] = [];
  dataSource = new QuestionList().finalQuestion;
  questionFlag: boolean = false;
  revealFlag: boolean = false;
  inputFlag: boolean = false;
  timeOutID: number = 0;
  bestPlayer: any = {};
  status = "";
  acceptedWagers: boolean = false;
  writeFlag: boolean = false;

  checkWagers(){
    console.log(this.wagerArray);
    for(let i = 0; i < this.players.length; i++){
      if(this.wagerArray[i] < 1 || this.wagerArray[i] > this.players[i].score){
        this.status = 'These wagers are not allowed!';
        this.acceptedWagers = false;
        break;
      }else{
        this.acceptedWagers = true;
      }
    }
    this.confirmWagers();
  }

  confirmWagers(){
    //console.log(this.wagerArray);
    if(this.acceptedWagers == true){
      this.questionFlag = true;
      console.log('Accepted Wagers');
      this.timerService.timerDown(5);
      setTimeout(() => {
        this.timerService.stopInterval();
        this.timerService.timerDown(30);
        this.writeFlag = true;
      }, 5500)
      this.timeOutID = window.setTimeout(() => {
        this.endGuessing();
      }, 30500)
      //setTimeout(() => {clearInterval(this.displayTimer), this.inputFlag = true}, 30500);
    }
  }

  endGuessing(){
    this.inputFlag = true;
    clearTimeout(this.timeOutID);
    this.timerService.stopInterval();
  }

  revealAnswer(){
    //console.log(this.answerArray);
    this.revealFlag = true;
    this.checkAnswers();
  }

  checkAnswers(){
      for(let i = 0; i < this.players.length; i++){
        let newScore: number;
        if(((this.answerArray[i]).toLowerCase() == (this.dataSource.answer).toLowerCase())){
          newScore = this.playerService.playerArray()[i].score + this.wagerArray[i];
          this.playerService.playerArray.update(values => 
            values.map(value => value.name === this.playerService.playerArray()[i].name ? 
            {name: value.name, score: newScore, lastCorrect: false, wrongGuess: false} : value
          ));
        }else{
          newScore = this.playerService.playerArray()[i].score - this.wagerArray[i];
          this.playerService.playerArray.update(values => 
            values.map(value => value.name === this.playerService.playerArray()[i].name ? 
            {name: value.name, score: newScore, lastCorrect: value.lastCorrect, wrongGuess: true} : value
          ));
        }
      }
      setTimeout(() => {this.router.navigateByUrl('/results', {skipLocationChange: true})}, 5000);
      this.bestPlayer = this.playerService.bestPlayer();
      console.log(this.bestPlayer)
  }


}
