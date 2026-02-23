import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { QuestionData } from './questionData';
import { QuestionData2 } from './question-data2';
import { QuestionTableData } from './questionTableData';
import { CategoryData } from './category-data';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  public selectedCategory = new BehaviorSubject<CategoryData>({'catId':-1, 'catName': ''});
  public categoryIndex = new BehaviorSubject<number>(-1);

}



