import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { QuestionData } from '../question-data2';
import { QuestionService } from '../question.service';
import { CategoryData } from '../category-data';
import { Router } from '@angular/router';
import { QuestionApiService } from '../question-api.service';

@Component({
  selector: 'app-developer-table',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  templateUrl: './developer-table.component.html',
  styleUrl: './developer-table.component.css'
})
export class DeveloperTableComponent {

  dataSource = new MatTableDataSource<QuestionData>();
  displayedColumns: string[] = ['id', 'answer', 'question', 'beginning', 'value', 'questionType', 'questionSource', 'action'];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private questionService: QuestionService, 
    private questionAPI: QuestionApiService, 
    private cd: ChangeDetectorRef, 
    private router: Router)
    {
    this.questionService.selectedCategory.subscribe(SelectedCategory => {
      this.getQuestions(SelectedCategory)
    })
  }

  public getQuestions(SelectedCategory: CategoryData){
    if(SelectedCategory.catId > -1){
      this.questionAPI.getQuestionsByCategory(SelectedCategory.catId).subscribe(data => {
        this.dataSource.data = data;
      })
    }else{
      this.dataSource.data = [];
    }

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.cd.markForCheck();
  }

  public applyFilter(e: any){
    const filterValue = (e.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public updateQuestion(id: number){
    this.router.navigate(['/update_question', id])
  }

  public viewQuestion(id: number){
    this.router.navigate(['/view_question', id])
  }

  public deleteQuestion(id: number){
    this.questionAPI.deleteQuestion(id).subscribe(data => {
      this.getQuestions(this.questionService.selectedCategory.value)
    })
  }

}