import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatCardModule}  from '@angular/material/card';
import { QuestionComponent } from '../question/question.component';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { PlayerService } from '../player.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuestionList } from '../questionList';
import { PlayerHeaderComponent } from '../player-header/player-header.component';
import { DailyQuestionComponent } from '../question/question.component';
import { QuestionData } from '../questionData';
import { QuestionTableData } from '../questionTableData';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet, 
    QuestionComponent, 
    MatCardModule, 
    MatDialogModule,
    MatGridListModule,
    FormsModule,
    CommonModule,
    PlayerHeaderComponent,
    DailyQuestionComponent
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

  dataSource: QuestionTableData[];
  //dataSourceAgain$ = of(new QuestionList().dataSource).subscribe((result: any) => this.dataSourceAgain = result);
  
  constructor(private cd: ChangeDetectorRef, private router: Router) { 
   this.dataSource = new QuestionList().dataSource;


   let rand = Math.floor(Math.random() * this.playerService.playerArray().length);
   this.playerService.playerArray()[rand].lastCorrect = true;
   //this.dDoubleNum = this.randomDaily(1, 28);
   //console.log('dDoubleNum: ' + this.dDoubleNum);
   //console.log(this.playerService.finalPlayers());

   
   //this.playerService.playerArray()[0].score = 1000;
   //this.playerService.playerArray()[1].score = 1000;
   //this.playerService.playerArray()[2].score = 1000;
  }

  playerService = inject(PlayerService);
  readonly dialog = inject(MatDialog);
  numOfQuestions: number = 0;
  switchedData: boolean = false;
  gameOver: boolean = false;
  bestPlayer: any = {};
  dDoubleNum: number = 0;
  dailyFlag: boolean = false;

  double_Dict = {
    first:[0,1],
    second:[2,2],
    third:[5,3]
  }

  public randomDaily(min: number, max: number): number{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  public randomDailyToggle(){
    if(this.dDoubleNum == this.numOfQuestions){
      this.dailyFlag = true;
    }else{
      this.dailyFlag = false;
    }
  }

  public selectDailyToggle(col: number, row: number){
    if(this.switchedData == true){
      if((col == this.double_Dict.second[0] && row == this.double_Dict.second[1]) || 
      (col == this.double_Dict.third[0] && row == this.double_Dict.third[1])){
        this.dailyFlag = true;
      }
    }else{
      if(col == this.double_Dict.first[0] && row == this.double_Dict.first[1]){
        this.dailyFlag = true;
      }
    }
  }

  public goToQuestion(clickedQuestion: QuestionData, col: number, row: number){
    clickedQuestion.beenClicked = true;
    this.selectDailyToggle(col, row);
    let dialogRef;
    
    if(this.dailyFlag){
      dialogRef = this.dialog.open(DailyQuestionComponent, {
        //height: '60%',
        width: '45%',
        data: {
          data: clickedQuestion,
          switched: this.switchedData,
        }
      });
    }else{
      dialogRef = this.dialog.open(QuestionComponent, {
        //height: '60%',
        width: '45%',
        data: {
          data: clickedQuestion,
          switched: this.switchedData,
        }
      });
    }

    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog Closed');
      this.numOfQuestions++;
      //this.dDoubleToggle();
      this.dailyFlag = false;
      if(this.numOfQuestions == 30){
        this.doubleJeopardy();
      }else if(this.numOfQuestions == 60){
        this.finalJeopardy();
      }
    });

  }

  finalJeopardy(){
    //This feature is currently incomplete. This function just goes to the final component

    //this.playerService.selectFinalPlayers();
    /*
    if(this.playerService.playerArray().length < 2){
      setTimeout(() => {this.router.navigateByUrl('/results', {skipLocationChange: true});}, 3000);
    }
    */
    this.router.navigateByUrl('/final', {skipLocationChange: true});
  }

  doubleJeopardy(){
    if(this.switchedData != true){
      this.switchedData = true;
      this.dataSource = new QuestionList().dataSource2;
      let dialogRef = this.dialog.open(BoardTransistionComponent);
      dialogRef.afterClosed().subscribe((result) => {
        if(result){
          this.router.navigateByUrl('/results', {skipLocationChange: true});
        }else{
          this.cd.markForCheck(); 
        }
      });
    }
  }

}

@Component({
  selector: 'board-transistion',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet, 
    FormsModule,
    CommonModule,
    MatDialogModule,
    PlayerHeaderComponent
  ],
  templateUrl: './board.transistion.component.html',
  styleUrl: './board.component.css'
})

export class BoardTransistionComponent{

  dialogRef = inject(MatDialogRef<BoardTransistionComponent>);

  closeDialog(): void{
    this.dialogRef.close({data: true});
  }
}