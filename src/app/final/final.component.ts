import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerHeaderComponent } from '../player-header/player-header.component';
import { ScoreService } from '../score.service';
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
    this.scoreService.selectFinalPlayers();
    for(let i = 0; i < this.players.length; i++){
      this.wagerArray[i] = 0;
      this.answerArray[i] = '';
    }
    console.log(this.wagerArray);
    console.log(this.answerArray);
  }

  scoreService = inject(ScoreService);
  timerService = inject(TimerService);
  players = this.scoreService.finalHope();
  wagerArray: number[] = [];
  answerArray: string[] = [];
  dataSource = new QuestionList().finalQuestion;
  questionFlag: boolean = false;
  revealFlag: boolean = false;
  inputFlag: boolean = false;
  displayTimer: number = 0;
  singleID: number = 0;
  //countDown = signal(30);
  bestPlayer: any = {};
  status = "";
  acceptedWagers: boolean = false;

  checkWagers(){
    console.log(this.wagerArray);
    for(let i = 0; i < this.players.length; i++){
      if(this.wagerArray[i] < 1 || this.wagerArray[i] >= this.players[i].score){
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
      //this.displayTimer = window.setInterval(() => {
        //this.countDown.update(value => value - 1);
      //}, 1000)
      this.timerService.stopInterval();
      this.timerService.timerDown(10);
      this.displayTimer = window.setTimeout(() => {
        this.endGuessing();
      }, 10500)
      //setTimeout(() => {clearInterval(this.displayTimer), this.inputFlag = true}, 30500);
    }
  }

  endGuessing(){
    this.inputFlag = true;
    //clearInterval(this.displayTimer);
    this.timerService.hideCountDown();
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
          newScore = this.scoreService.finalHope()[i].score + this.wagerArray[i];
          this.scoreService.finalHope.update(values => 
            values.map(value => value.name === this.scoreService.finalHope()[i].name ? 
            {name: value.name, score: newScore, lastCorrect: false, wrongGuess: false} : value
          ));
        }else{
          newScore = this.scoreService.finalHope()[i].score - this.wagerArray[i];
          this.scoreService.finalHope.update(values => 
            values.map(value => value.name === this.scoreService.finalHope()[i].name ? 
            {name: value.name, score: newScore, lastCorrect: value.lastCorrect, wrongGuess: true} : value
          ));
        }
      }
      setTimeout(() => {this.router.navigateByUrl('/results', {skipLocationChange: true})}, 5000);
      this.bestPlayer = this.scoreService.bestPlayer();
      console.log(this.bestPlayer)
  }


}
