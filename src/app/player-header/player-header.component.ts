import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ScoreService } from '../score.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './player-header.component.html',
  styleUrl: './player-header.component.css'
})
export class PlayerHeaderComponent {
  scoreService = inject(ScoreService);
  players: any;

  constructor(private cd: ChangeDetectorRef){
    this.players = this.scoreService.finalHope;
  }

  public changeHeader(){
    //this.players = this.scoreService.finalPlayers;
    this.cd.markForCheck(); 
  }

}
