import { ChangeDetectorRef, Component, Inject, inject } from '@angular/core';
import { QuestionList } from '../questionList';
import { QuestionTableData } from '../questionTableData';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { QuestionData } from '../question-data2';
import { MatIconModule } from '@angular/material/icon';
import { QuestionApiService } from '../question-api.service';
import { CategoryData } from '../category-data';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-developer-board',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule, 
    MatDialogModule,
    MatGridListModule,
    FormsModule,
    MatIconModule
  ],
  templateUrl: './developer-board.component.html',
  styleUrl: './developer-board.component.css', 
})
export class DeveloperBoardComponent {

  dataSource: QuestionTableData[];
  sideBarCategoryName: string = "";
  sideBarCategoryQuestions: QuestionData[] = [];

  private _selectedBoard = ""
  _selectedCategory: CategoryData = {} as CategoryData;

  draggedQuestion: QuestionData;
  currentBoardName: string = "";
  allSavedBoardNames: string[] = [];
  readonly dialog = inject(MatDialog);
  


  constructor(
    private cd: ChangeDetectorRef, 
    private questionAPI: QuestionApiService,
    private localStorageService: LocalStorageService,
    private router: Router
  ){
    this.draggedQuestion = new QuestionList().defaultQuestion
    // this.allSavedBoardNames = this.listBoards()    
    this.allSavedBoardNames = this.localStorageService.getBoardNames()
    // console.log(this.allSavedBoardNames)
    this.dataSource = this.buildDefault()


  }

  buildDefault(): QuestionTableData[]{
    let buildABoard: QuestionTableData[] = []
      for(let i = 0; i < 6; i++){
        buildABoard.push(new QuestionList().defaultCategory)
        for(let j = 0; j < 5; j++){
          buildABoard[i].questions.push(new QuestionList().defaultQuestion)
          buildABoard[i].questions[j].value *= (j + 1)
        }
      }
      return buildABoard
  }

  listCategory(boardCategoryId: number): void{
    let dialogRef = this.dialog.open(DeveloperBoardCategoryDialogComponent, {
      height: '70%',
      width: '70%',
      data: {
        data: this.dataSource,
        selectedCol: this.dataSource[boardCategoryId]
      }
    })

    dialogRef.afterClosed().subscribe((data) => {
      this.sideBarCategoryName = data.data.catName;
      this.dataSource[boardCategoryId].category = data.data.catName
      this.dataSource[boardCategoryId].categoryId = data.data.catId
      this.questionAPI.getQuestionsByCategory2(data.data.catId).subscribe((data) => {
        this.sideBarCategoryQuestions = data;
        this.cd.markForCheck();
      })

    })


  }

  record(e:any, data: QuestionData){
    e.stopPropagation();
    // this.draggedQuestion = (data as QuestionData3);
    this.draggedQuestion = data
    console.log(this.draggedQuestion)
    // this.tempDrag.beenClicked = false;
  }

  onDragOver(event: any) {
    event.preventDefault();
  }

  onDrop(e:any, colNum:number, rowNum:number){
    e.preventDefault()
    let beforeQuestion = this.dataSource[colNum].questions[rowNum];
    if(this.draggedQuestion.category.catId != this.dataSource[colNum].categoryId){
      console.log("Wrong category")
    }else{
      if(this.draggedQuestion.value != beforeQuestion.value){
        console.log("Wrong amount")
      }else{
        this.dataSource[colNum].questions[rowNum] = this.draggedQuestion;
      }
    }
  }


  viewQuestion(colNum:number, rowNum:number){
    console.log(this.dataSource[colNum].questions[rowNum])
  }

  get localSelectedBoard(): string{
      return this._selectedBoard;
    }
  set localSelectedBoard(selection: string){
      this._selectedBoard = selection;
    }

  saveBoard(){
    if(this.allSavedBoardNames.includes(this.currentBoardName) && !(this.allSavedBoardNames.includes(""))){
      this.localStorageService.setItem(this.currentBoardName, {data: this.dataSource})
    }else{
      let dialogRef = this.dialog.open(DeveloperBoardSaveBoardDialogComponent, {
      height: '70%',
      width: '70%'
    })
    dialogRef.afterClosed().subscribe((data) => {
      if(data.data != undefined){
        this.localStorageService.setItem(data.data, {data: this.dataSource})
  
      let holder = this.localStorageService.getBoardNames();
      holder.push(data.data)
      this.localStorageService.setBoardNames(holder)
  
      this.currentBoardName = data.data
      this.allSavedBoardNames = this.localStorageService.getBoardNames();
      this.localSelectedBoard = data.data
      this.cd.markForCheck();
      }

    })
    }

  }

  loadBoard(){
    const retrieved = this.localStorageService.getItem<{data: QuestionTableData[]}>(this.localSelectedBoard)
    // console.log(retrieved)
    const temp2 = retrieved?.data as QuestionTableData[]
    // console.log(temp2)
    for(let i = 0; i < temp2.length; i++){
      this.dataSource[i] = temp2[i]
    }
    this.currentBoardName = this.localSelectedBoard
    this.cd.markForCheck()
  }

  resetBoard(){
    this.dataSource = this.buildDefault();
    this.sideBarCategoryQuestions = [];
    this.sideBarCategoryName = "";
    this.currentBoardName = "";
    this.localSelectedBoard = "";
    this.allSavedBoardNames = this.localStorageService.getBoardNames();
    this.cd.markForCheck();
  }

  deleteBoard(){
    if(this.localSelectedBoard == ""){
      console.log("There is no saved board to delete")
    }else{
      let oldList = this.localStorageService.getBoardNames();
      if(oldList.indexOf(this.localSelectedBoard) > -1){
        oldList.splice(oldList.indexOf(this.localSelectedBoard), 1)
        this.localStorageService.setBoardNames(oldList)
        this.localStorageService.removeItem(this.localSelectedBoard);
      }
      this.resetBoard()
    }
  }

  deleteAllBoards(){
    this.localStorageService.clear();
    this.localStorageService.setBoardNames([])
    this.localStorageService.setPlayableBoards(["", ""])
    this.resetBoard()
  }

  setBoard(){
    if(this.currentBoardName == ""){
      console.log("Can't set an incomplete board")
    }else{
      this.dialog.open(DeveloperBoardSetBoardDialogComponent, {
        height: '70%',
        width: '70%',
        data: {
          data: this.currentBoardName
        }
      })
    }
    
  }

  mouseEnter(column: QuestionTableData){
    // console.log("Entering " + column.category)
    if(column.categoryId != 0){
      this.questionAPI.getQuestionsByCategory2(column.categoryId).subscribe((data) => {
        this.sideBarCategoryQuestions = data;
        if(column.category != "Add Category")
          this.sideBarCategoryName = column.category
        this.cd.markForCheck();
      })
    }
    
  }

  mouseLeave(column: QuestionTableData){
    // console.log("Leaving: " + column.category)
    // this.tempData = []
  }

  goHome(){
    this.router.navigateByUrl("/")
  }
}

@Component({
  selector: 'app-developer-board-category-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule, 
    MatDialogModule,
    MatGridListModule,
    FormsModule,
    MatIconModule
  ],
  templateUrl: './developer-board-category-dialog.component.html',
  styleUrl: './developer-board.component.css', 
})

export class DeveloperBoardCategoryDialogComponent{

  categoryList: CategoryData[] = [];
  _selectedCategory: CategoryData = {} as CategoryData;
  dialogRef = inject(MatDialogRef<DeveloperBoardCategoryDialogComponent>);
  okSelection = true

  constructor(
    private cd: ChangeDetectorRef, 
    private questionAPI: QuestionApiService,
    @Inject(MAT_DIALOG_DATA) public dataSourceCols: any
  )
    {
      console.log(dataSourceCols)
      this.questionAPI.getCategoryNames().subscribe((data) => {
        this.categoryList = data;
        this.cd.detectChanges();
      });
  }

  get localSelectedCategory(): CategoryData{
      return this._selectedCategory;
    }
  set localSelectedCategory(selection: CategoryData){
      this._selectedCategory = selection;
    }

  confirm(){
    for(let i = 0; i < this.dataSourceCols.data.length; i++){
      if(this.localSelectedCategory.catId == this.dataSourceCols.data[i].categoryId 
         ){
        // console.log("Category already in board. Pick again")
        this.okSelection = false
      }
    }
    if(this.okSelection)
      this.dialogRef.close({data:this.localSelectedCategory})
  }

}

@Component({
  selector: 'app-developer-board-saveBoard-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule, 
    MatDialogModule,
    MatGridListModule,
    FormsModule,
    MatIconModule,
    
  ],
  templateUrl: './developer-board-saveBoard-dialog.component.html',
  styleUrl: './developer-board.component.css', 
})

export class DeveloperBoardSaveBoardDialogComponent{

  dialogRef = inject(MatDialogRef<DeveloperBoardCategoryDialogComponent>);
  newBoardName = ""

  constructor(private localStorageService: LocalStorageService)
    {

    }

  confirm(){
    if(this.localStorageService.getBoardNames().includes(this.newBoardName)){
      // console.log("Name Already Found")
    }else{
      this.dialogRef.close({data:this.newBoardName})
    }
  }


}


@Component({
  selector: 'app-developer-board-setBoard-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    MatRadioModule
    
  ],
  templateUrl: './developer-board-setBoard-dialog.component.html',
  styleUrl: './developer-board.component.css', 
})

export class DeveloperBoardSetBoardDialogComponent{

  dialogRef = inject(MatDialogRef<DeveloperBoardCategoryDialogComponent>);

  public existingBoardFound: boolean = false;
  public warningMessage: string = "";
  public subWarningMessage: string = "";
  public submissionCode: number = -1;
  public playableBoardName = this.localStorageService.getPlayableBoardNames()
  public boardOptions = [
    {id: 0, optionLabel: "Set as main board"}, 
    {id: 1, optionLabel: "Set as second board"}
  ]
  public selectedBoardOption = {
    id: -1,
    optionLabel: ""
  }

  constructor(
    private localStorageService: LocalStorageService,
    @Inject(MAT_DIALOG_DATA) public obtainedBoardName: any
  )
    {
      // console.log(obtainedBoardName.data)
    }

  confirm(option: number){
    if(this.obtainedBoardName.data == this.playableBoardName[option]){
      this.warningMessage = this.obtainedBoardName.data + " is already set in that position"
    }
    else if(this.playableBoardName.includes(this.obtainedBoardName.data) ){
      if(option == 0){
        this.warningMessage = this.obtainedBoardName.data + " is already set as the second board"
        this.subWarningMessage = "Do you wish to set the main board as " + this.obtainedBoardName.data
        this.submissionCode = 0
      }else {
        this.warningMessage = this.obtainedBoardName.data + " is already set as the first board"
        this.subWarningMessage = "Do you wish to set the second board as " + this.obtainedBoardName.data
        this.submissionCode = 1
      }
      this.existingBoardFound = true
    }else if(this.playableBoardName[option] != ""){
      this.warningMessage = this.playableBoardName[option] + " is already set as this board"
      this.subWarningMessage = "Do you wish to overwrite it"
      this.existingBoardFound = true
      this.submissionCode = 2
    }
    else{
      this.submissionCode = 2
      this.finalConfirm()
    }
  }

  finalConfirm(){
    console.log(this.obtainedBoardName.data)
    if(this.submissionCode == 0){
      this.playableBoardName.splice(0, 1, this.obtainedBoardName.data)
      this.playableBoardName.splice(1, 1, "")
    }else if(this.submissionCode == 1){
      this.playableBoardName.splice(1, 1, this.obtainedBoardName.data)
      this.playableBoardName.splice(0, 1, "")
    }else if(this.submissionCode == 2){
      this.playableBoardName.splice(this.selectedBoardOption.id, 1, this.obtainedBoardName.data)
    }
    this.localStorageService.setPlayableBoards(this.playableBoardName)
    this.dialogRef.close()
  }

}