import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CategoryData } from './category-data';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  public selectedCategory = new BehaviorSubject<CategoryData>({'catId':-1, 'catName': ''});
  public categoryIndex = new BehaviorSubject<number>(-1);

}



