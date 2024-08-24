import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BoardComponent } from './board/board.component';
import { FinalComponent } from './final/final.component';
import { ResultsComponent } from './results/results.component';

export const routes: Routes = [
    //{ path: '', redirectTo: '', pathMatch: 'full'},
    { path: '', component: WelcomeComponent},
    { path: 'board', component: BoardComponent},
    { path: 'final', component: FinalComponent},
    { path: 'results', component: ResultsComponent}
];
