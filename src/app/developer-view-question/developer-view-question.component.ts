import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionData } from '../question-data2';
import { QuestionApiService } from '../question-api.service';

@Component({
  selector: 'app-developer-view-question',
  standalone: true,
  imports: [],
  templateUrl: './developer-view-question.component.html',
  styleUrl: './developer-view-question.component.css'
})
export class DeveloperViewQuestionComponent {

  question: QuestionData = {} as QuestionData;
  constructor(
    private questionAPI: QuestionApiService, 
    private cd: ChangeDetectorRef, 
    private route: ActivatedRoute, 
    private router: Router
  ){
    let id = this.route.snapshot.params['id'];
    this.questionAPI.getQuestionById(id).subscribe(data => {
      this.question = data;
      this.cd.markForCheck();
    })
  }  
  
  public goToDeveloper(){
    this.router.navigateByUrl('/developer');
  }
}
