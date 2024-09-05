import { Component, inject, Inject, signal } from '@angular/core';
import { MatCardModule}  from '@angular/material/card';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { PlayerService } from '../player.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { interval, take, of, timer, concatMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    MatCardModule, 
    MatDialogModule, 
    MatInputModule, 
    MatFormFieldModule, 
    FormsModule,
    CommonModule
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})

export class QuestionComponent {

constructor(@Inject(MAT_DIALOG_DATA) public question: any) {
  this.timerService.timerDown(5);
  this.singleID = window.setTimeout(() => {
    this.timerService.stopInterval()
    this.gracePeriodOver = true, 
    this.guessingPeriod()}, 5500);
}

playerService = inject(PlayerService);
timerService = inject(TimerService);
givenList = this.playerService.playerArray;
dialogRef = inject(MatDialogRef<QuestionComponent>);


 allGuess: boolean = false;
 gracePeriodOver: boolean = false;
 correctGuess: boolean = false;
 answer: string = "";
 result: string = "";
 numGuess: number = 0;
 currentPlayer: number = 0;
 newScore: number = 0;
 singleID: number = 0;

 playerGuessTime(playerID: number){
  this.currentPlayer = playerID;
  this.timerService.timerDown(10);
  this.singleID = window.setTimeout(() => {this.checkAnswer();}, 10500);
 }

 keyPress(x:any){
  if(x.target.value == 'q' && this.playerService.playerArray()[0].wrongGuess != true){
    this.clearTimers();
    this.playerGuessTime(1);
  }else if(x.target.value == 'p' && this.playerService.playerArray()[1].wrongGuess != true){
    this.clearTimers();
    this.playerGuessTime(2);
  }
  else if(x.target.value == 'b' && this.playerService.playerArray()[2].wrongGuess != true){
    this.clearTimers();
    this.playerGuessTime(3);
  }
  //console.log(x.target.value);
  console.log(this.currentPlayer);
 }

 keyPress2(x: any){
  if(x.target.value != null){
    this.clearTimers();
  }
 }

 maxGuess(){
  if (this.numGuess == this.playerService.numPlayers()){
    console.log("Max Guesses Reached")
    this.clearTimers();
    this.allGuess = true;
  }
 }

 clearTimers(){
  console.log('Clear Time!');
  this.timerService.stopInterval();
  clearTimeout(this.singleID);
 }

 guessingPeriod(){
  this.timerService.timerDown(10);
  this.singleID = window.setTimeout(() => {this.timerService.stopInterval(), this.revealAnswer()}, 10500);
 }

 revealAnswer(){
  this.allGuess = true;
  this.resetWrongGuess();
  setTimeout(() => {this.dialogRef.close();}, 3000)
 }

 resetWrongGuess(){
  for(let i = 0; i < this.playerService.playerArray().length; i++){
    this.playerService.playerArray()[i].wrongGuess = false;
  }
 }
  checkAnswer(){
    if(((this.answer).toLowerCase() == (this.question.data.answer).toLowerCase())){
      //this.result = "Correct"
      const playerID = this.currentPlayer - 1;
      this.correctGuess = true;
      if(this.question.switched != true){
        this.newScore = this.playerService.playerArray()[playerID].score + this.question.data.value;
      }else{
        this.newScore = this.playerService.playerArray()[playerID].score + (this.question.data.value * 2);
      }
      this.playerService.playerArray.update(values => 
        values.map(value => value.name === this.playerService.playerArray()[playerID].name ? 
        {name: value.name, score: this.newScore, lastCorrect: true, wrongGuess: false} 
        : {name: value.name, score: value.score, lastCorrect: false, wrongGuess: false} 
      ));
      setTimeout(() => {this.dialogRef.close({data: this.currentPlayer});}, 3000)
    }else{
      //this.result = "Wrong"
      this.answer = "";
      const playerID = this.currentPlayer - 1;
      if(this.question.switched != true){
        this.newScore = this.playerService.playerArray()[playerID].score - this.question.data.value;
      }else{
        this.newScore = this.playerService.playerArray()[playerID].score - (this.question.data.value * 2);
      }
      this.playerService.playerArray.update(values => 
        values.map(value => value.name === this.playerService.playerArray()[playerID].name ? 
        {name: value.name, score: this.newScore, lastCorrect: value.lastCorrect, wrongGuess: true} : value
      ));
      this.numGuess++;
      this.currentPlayer = 0;
      this.clearTimers();
      this.guessingPeriod();
      this.maxGuess();
    }
    if(this.allGuess){
      this.resetWrongGuess();
      setTimeout(() => {this.dialogRef.close({});}, 3000)
    }
  }
  
}


@Component({
  selector: 'daily-question',
  standalone: true,
  imports: [
    MatDialogModule, 
    MatInputModule, 
    MatFormFieldModule, 
    FormsModule,
    CommonModule
  ],
  templateUrl: './daily.question.component.html',
  styleUrl: './question.component.css'
})

export class DailyQuestionComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public question: any) {
    if(this.question.switched){
      this.minVal = 200;
      this.currentMax = 2000;
    }else{
      this.minVal = 100;
      this.currentMax = 1000;
    }

    this.wager = this.minVal.valueOf();
    //console.log('Wager: ' + this.wager);

    for(let i = 0; i < this.playerService.playerArray().length; i++){
      if(this.playerService.playerArray()[i].lastCorrect == true){
        this.currentPlayer = i;
        if(this.playerService.playerArray()[i].score < this.currentMax){
          this.maxVal = this.currentMax
        }else{
          this.maxVal = this.playerService.playerArray()[i].score;
        }
        break;
      }
    }
    //console.log(question);
}
  playerService = inject(PlayerService);
  timerService = inject(TimerService);
  dialogRef = inject(MatDialogRef<DailyQuestionComponent>);

 currentPlayer: number = 0;
 currentMax: number = 0;
 minVal: number = 0;
 maxVal: number = 0;
 newScore: number = 0;
 timeOutID: number = 0;
 wager: number = 0;
 answer: string = "";
 status: string = '';
 correctGuess: boolean = false;
 revealFlag: boolean = false;
 guessFlag: boolean = false;
 proceed: boolean = false;

  checkWager(){
    if(this.wager < this.minVal){
      this.status = 'You Need to Bet More Than That!'
    }else if(this.wager > this.maxVal){
      this.status = 'You Can\'t Bet That Many Points!'
    }else{
      this.proceed = true;
      this.timerService.timerDown(5);
      setTimeout(() => {
        this.timerService.stopInterval();
        this.guessFlag = true, 
        this.timerService.timerDown(10)
      }, 5500)
      this.timeOutID = window.setTimeout(() => {
        this.timerService.stopInterval();
        this.checkAnswer()
      }, 15500);
    }
  }
  
  keyPress2(x: any){
    if(x.target.value != null){
      this.timerService.stopInterval();
      clearTimeout(this.timeOutID);
    }
   }

  checkAnswer(){
    if(((this.answer).toLowerCase() == (this.question.data.answer).toLowerCase())){
      this.correctGuess = true;
      const playerID = this.currentPlayer;
      this.newScore = this.playerService.playerArray()[playerID].score + this.wager;
      this.playerService.playerArray.update(values => 
        values.map(value => value.name === this.playerService.playerArray()[playerID].name ? 
        {name: value.name, score: this.newScore, lastCorrect: true, wrongGuess: false} 
        : {name: value.name, score: value.score, lastCorrect: false, wrongGuess: false} 
      ));
    }else{
      this.revealFlag = true;
      const playerID = this.currentPlayer;
      this.newScore = this.playerService.playerArray()[playerID].score - this.wager;
      this.playerService.playerArray.update(values => 
        values.map(value => value.name === this.playerService.playerArray()[playerID].name ? 
        {name: value.name, score: this.newScore, lastCorrect: value.lastCorrect, wrongGuess: false} : value
      ));
    }
    setTimeout(() => {this.dialogRef.close({});}, 3000);
  }

}