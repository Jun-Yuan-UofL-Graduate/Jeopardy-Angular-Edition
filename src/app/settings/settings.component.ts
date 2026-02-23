import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,

  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

  tasks:any=[];
  APIURL="https://localhost:8000/";

  constructor(private http:HttpClient){
    this.tasks = this.get_task();
    console.log("New tasks: " + this.tasks)
  }

  get_task(){
    //return this.http.get<any>(this.APIURL+"get_questions").pipe(map(res => res['task']))

    this.http.get<any>(this.APIURL+"get_questions").subscribe((res)=>{
      this.tasks = res;
      console.log(res);
      console.log("This res:" + this.tasks);
    })
  }
}
