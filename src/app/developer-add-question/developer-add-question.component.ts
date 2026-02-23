import { Component } from '@angular/core';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';
import { QuestionData2 } from '../question-data2';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoryData } from '../category-data';
import { QuestionApiService } from '../question-api.service';

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
question: QuestionData2 = {} as QuestionData2;

  beginnings = ['What is', 'What is a', 'What is an', 'What is the', 'What are', 'Who is', 'Who are', 'When is', 'Where is']
  values = [200, 400, 600, 800, 1000]
  types = ['text', 'image']

  isDisabled = true
  currentCategory: CategoryData;
  constructor(
    private questionService: QuestionService, 
    private questionAPI: QuestionApiService, 
    private router: Router)
  {
    this.question.beginning = 'What is'
    this.question.value = 200
    this.question.questionType = 'text'

    this.currentCategory = this.questionService.selectedCategory.value
    this.question.categoryId = this.questionService.selectedCategory.value.catId;
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
