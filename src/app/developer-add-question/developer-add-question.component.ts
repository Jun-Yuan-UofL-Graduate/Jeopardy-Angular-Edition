import { Component } from '@angular/core';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';
import { QuestionData } from '../question-data2';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoryData } from '../category-data';
import { QuestionApiService } from '../question-api.service';
import { QuestionList } from '../questionList';

@Component({
  selector: 'app-developer-add-question',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './developer-add-question.component.html',
  styleUrl: './developer-add-question.component.css'
})
export class DeveloperAddQuestionComponent {

  question = new QuestionList().defaultQuestion
  beginnings:string[] = ['What is', 'What is a', 'What is an', 'What is the', 'What are', 'Who is', 'Who are', 'When is', 'Where is']
  values:number[] = [200, 400, 600, 800, 1000]
  types:string[] = ['text', 'image']
  isDisabled:boolean = true
  currentCategory: CategoryData;

  constructor(
    private questionService: QuestionService, 
    private questionAPI: QuestionApiService, 
    private router: Router)
  {
    this.currentCategory = this.questionService.selectedCategory.value
    this.question.category.catId = this.questionService.selectedCategory.value.catId
    this.question.category.catName = this.currentCategory.catName
  }

  changeBeginning(e: any){
    this.question.beginning = (e.target.value)
  }

  changeValue(e: any){
    this.question.value = (e.target.value)
  }

  changeType(e: any){
    this.question.questionType = (e.target.value)
    if(e.target.value == 'text'){
      this.isDisabled = true
    }else{
      this.isDisabled = false
    }
  }

  saveQuestion(){
    this.questionAPI.createQuestion(this.question).subscribe((data) => {
      this.goToDeveloper()
    },
    error => console.log(error))
  }

  goToDeveloper(){
    this.router.navigateByUrl('/developer');
  }

  // onSubmit(){
  //   this.saveQuestion()
  // }
}
