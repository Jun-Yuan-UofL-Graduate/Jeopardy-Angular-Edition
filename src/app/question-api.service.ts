import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryData } from './category-data';
import { Observable } from 'rxjs';
import { QuestionData2 } from './question-data2';
import { QuestionService } from './question.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionApiService {

  private baseURL = "http://localhost:8080/api/v1/questions";
  private baseURLCategory = "http://localhost:8080/api/v1/categories";
  private catId: number = -1;

  constructor(private httpClient: HttpClient, private questionService: QuestionService) {
    this.questionService.selectedCategory.subscribe(data => {
      this.catId = data.catId;
    })

  }


  getCategoryNames(): Observable<CategoryData[]>{
    return this.httpClient.get<CategoryData[]>(`${this.baseURLCategory}`);
  }

  getQuestionById(id: number): Observable<QuestionData2>{
    return this.httpClient.get<QuestionData2>(`${this.baseURL}/${id}`);
  }
  
  getQuestionsByCategory(catId: number): Observable<QuestionData2[]>{
    return this.httpClient.get<QuestionData2[]>(`${this.baseURLCategory}/2/${catId}`);
  }

  createCategory(categoryName: String): Observable<Object>{
    return this.httpClient.post<String>(`${this.baseURLCategory}`, categoryName);
  }

  createQuestion(question: QuestionData2): Observable<Object>{
    return this.httpClient.post<QuestionData2>(`${this.baseURLCategory}/createQuestion`, question)
  }

  updateQuestion(id: number, question: QuestionData2): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, question);
  }

  deleteCategory(id: number){
    return this.httpClient.delete(`${this.baseURLCategory}/${id}`);
  }

  deleteQuestion(questionId: number){
    return this.httpClient.delete(`${this.baseURLCategory}/${this.catId}/question/${questionId}`);
  }



  //The functions below are outdated, kept just in case

  // public getSelectedCategory(){
  //   return this.selectedCategory;
  // }

  // public setSelectedCategory(selectedCategory: CategoryData){
  //   this.selectedCategory = selectedCategory;
  // }

  // getQuestionsList(): Observable<QuestionData2[]>{
  //   return this.httpClient.get<QuestionData2[]>(`${this.baseURL}`);
  // }

  // addQuestion(question: QuestionData2): Observable<Object>{
  //   return this.httpClient.post<QuestionData2>(`${this.baseURL}`, question);
  // }

  // deleteQuestion(id: number){
  //   return this.httpClient.delete(`${this.baseURL}/${id}`);
  // }

  // getCategoriesList(): Observable<QuestionTableData[]>{
  //   return this.httpClient.get<QuestionTableData[]>(`${this.baseURLCategory}`);
  // }

  // addCategory(category: QuestionTableData): Observable<Object>{
  //   return this.httpClient.post<QuestionTableData>(`${this.baseURLCategory}`, category);
  // }

  // getQuestionsByCategory(catId: number): Observable<QuestionData2>{
  //   return this.httpClient.get<QuestionData2>(`${this.baseURLCategory}/${catId}`);
  // }

  // deleteQuestion(id: number){
  //   return this.httpClient.delete(`${this.baseURL}/${id}`);
  // }
}
