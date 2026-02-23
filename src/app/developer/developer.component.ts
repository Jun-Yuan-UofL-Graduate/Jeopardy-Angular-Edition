import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { QuestionService } from '../question.service';
import { QuestionApiService } from '../question-api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryData } from '../category-data';
import { DeveloperTableComponent } from '../developer-table/developer-table.component';


@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    DeveloperTableComponent,
  ],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.css'
})

export class DeveloperComponent {
  // questions: QuestionData2[] = [];
  categoryList: CategoryData[] = [];
  _selectedCategory: CategoryData = {} as CategoryData;

  userCategoryName: String = "";
  categoryIndex: number = 0;
  showOptions: Boolean = false;

  constructor(
    private questionService: QuestionService, 
    private questionAPI: QuestionApiService, 
    private cd: ChangeDetectorRef, 
    private router: Router)
  {
    this.getCategories();
  }

  private getCategories(){
    this.questionAPI.getCategoryNames().subscribe((data) => {
      this.categoryList = data;
      if(this.questionService.categoryIndex.value > -1){
        this.localSelectedCategory = this.categoryList[this.questionService.categoryIndex.value];
        this.questionService.selectedCategory.next(this.categoryList[this.questionService.categoryIndex.value])
        this.showOptions = true;
      }else{

        this.localSelectedCategory = {'catId':-1, 'catName': ''};
        this.questionService.selectedCategory.next({'catId':-1, 'catName': ''});
        this.showOptions = false;
      }
      this.cd.markForCheck(); 
    })
  }

  public changeCategory(e: any){
    this.showOptions = true;
    this.categoryIndex = Number(e.target.value[0]);
    this.questionService.selectedCategory.next(this.localSelectedCategory);
    this.questionService.categoryIndex.next(this.categoryIndex);
    // this.questionAPI.getQuestionsByCategory2(this.SelectedCategory.catId).subscribe(data => {
    //   this.questions = data;
    //   this.cd.detectChanges(); 
    // })
  }

  public createCategory(){
    this.questionAPI.createCategory(this.userCategoryName).subscribe((data) => {
      this.getCategories();
    });
  }

  public addQuestion(){
    // this.router.navigateByUrl('/add_question', {skipLocationChange: true});
    this.router.navigate(['add_question'])
  }

  public deleteCategory(){
    this.questionAPI.deleteCategory(this.localSelectedCategory.catId).subscribe(data => {
      this.questionService.categoryIndex.next(-1);
      this.getCategories();
      // this.questions = [];
      // this.questionService.categoryIndex.next(-1);
      // this.cd.markForCheck();
    });
  }


  //This function will be implemented in a future update
  // public createBoard(){

  // }


  get localSelectedCategory(): CategoryData{
      return this._selectedCategory;
    }
  set localSelectedCategory(selection: CategoryData){
      this._selectedCategory = selection;
    }

}
