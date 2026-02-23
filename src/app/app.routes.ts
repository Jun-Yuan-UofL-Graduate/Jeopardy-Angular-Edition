import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BoardComponent } from './board/board.component';
import { FinalComponent } from './final/final.component';
import { ResultsComponent } from './results/results.component';
import { SettingsComponent } from './settings/settings.component';
import { DeveloperComponent } from './developer/developer.component';
import { DeveloperUpdateQuestionComponent } from './developer-update-question/developer-update-question.component';
import { DeveloperAddQuestionComponent } from './developer-add-question/developer-add-question.component';
import { DeveloperViewQuestionComponent } from './developer-view-question/developer-view-question.component';

export const routes: Routes = [
    //{ path: '', redirectTo: '', pathMatch: 'full'},
    { path: '', component: WelcomeComponent},
    { path: 'board', component: BoardComponent},
    { path: 'final', component: FinalComponent},
    { path: 'results', component: ResultsComponent},
    { path: 'settings', component: SettingsComponent},
    { path: 'developer', component: DeveloperComponent},
    { path: 'add_question', component: DeveloperAddQuestionComponent},
    // { path: 'add_question/:id', component: DeveloperAddQuestionComponent},
    { path: 'update_question/:id', component: DeveloperUpdateQuestionComponent},
    { path: 'view_question/:id', component: DeveloperViewQuestionComponent}
];
