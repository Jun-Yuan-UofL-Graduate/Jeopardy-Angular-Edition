import { ChangeDetectorRef, Component } from '@angular/core';
import { QuestionService } from '../question.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionData2 } from '../question-data2';
import { QuestionApiService } from '../question-api.service';

@Component({
  selector: 'app-developer-view-question',
  standalone: true,
  imports: [],
  templateUrl: './developer-view-question.component.html',
  styleUrl: './developer-view-question.component.css'
})
export class DeveloperViewQuestionComponent {

  id: number;
  question: QuestionData2 = {} as QuestionData2;
  constructor(
    private questionService: QuestionService, 
    private questionAPI: QuestionApiService, 
    private cd: ChangeDetectorRef, 
    private route: ActivatedRoute, 
    private router: Router
  ){
    this.id = this.route.snapshot.params['id'];
    this.questionAPI.getQuestionById(this.id).subscribe(data => {
      this.question = data;
      this.cd.markForCheck();
    })
  }  
  
  public goToDeveloper(){
    this.router.navigateByUrl('/developer');
  }
}
