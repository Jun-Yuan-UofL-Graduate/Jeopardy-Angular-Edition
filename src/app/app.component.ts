import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PlayerHeaderComponent } from './player-header/player-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [ 
    RouterLink,
    RouterOutlet,
    PlayerHeaderComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Jeopardy!';
}
