import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestionData } from '../question-data2';
import { QuestionService } from '../question.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionApiService } from '../question-api.service';

@Component({
  selector: 'app-developer-update-question',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './developer-update-question.component.html',
  styleUrl: './developer-update-question.component.css'
})
export class DeveloperUpdateQuestionComponent {
  question: QuestionData = {} as QuestionData;
  id: number;
  beginnings:string[] = ['What is', 'What is a', 'What is an', 'What is the', 'What are', 'Who is', 'Who are', 'When is', 'Where is']
  values:number[] = [200, 400, 600, 800, 1000]
  types:string[] = ['text', 'image']
  isDisabled:boolean = true

  _val: number = this.values[0];
  _beginning: string = this.beginnings[0];
  _type: string = this.types[0];

  constructor(
    private questionAPI: QuestionApiService, 
    private cd: ChangeDetectorRef, 
    private router: Router, 
    private route: ActivatedRoute)
    {
      this.id = this.route.snapshot.params['id'];
      this.questionAPI.getQuestionById(this.id).subscribe((data) => {
        this.question = data;
        this.Value = this.question.value;
        this.Beginning = this.question.beginning;
        this.Type = this.question.questionType;
        this.changeType(this._type);
        this.cd.markForCheck(); 
      }, error => console.log(error));
    }

    get Beginning(): string{
      return this._beginning;
    }
    set Beginning(selection: string){
      this._beginning = selection;
    }

    get Value(): number{
      return this._val;
    }
    set Value(num: number){
      this._val = num;
    }

    get Type(): string{
      return this._type;
    }
    set Type(selection: string){
      this._type = selection;
    }

    changeType(e: any){
      if(this.Type == 'text'){
        this.isDisabled = true
      }else{
        this.isDisabled = false
      }
    }

    goToDeveloper(){
      // this.router.navigate(['/developer']);
      this.router.navigateByUrl('/developer');
    }
  

    saveQuestion(){
      this.question.value = this.Value;
      this.question.beginning = this.Beginning;
      this.question.questionType = this.Type
      this.questionAPI.updateQuestion(this.id, this.question).subscribe(data => {
        this.goToDeveloper();
      }, error => (console.log(error)))
    }

    // onSubmit(){
      
    // }
}
