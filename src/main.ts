import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './app/welcome/welcome.component';
import { QuestionComponent } from './app/question/question.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {providers: 
  [
    provideAnimations(),
  ]})

  bootstrapApplication(AppComponent,{
    providers:[
      importProvidersFrom(BrowserModule),
      importProvidersFrom(BrowserAnimationsModule),
    ]
  }); 

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(WelcomeComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(WelcomeComponent, {providers: 
  [provideAnimations()]})

bootstrapApplication(QuestionComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(QuestionComponent, {providers: 
  [provideAnimations()]})