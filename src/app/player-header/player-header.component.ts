import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { PlayerService } from '../player.service';
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
  playerService = inject(PlayerService);
  players: any;

  constructor(private cd: ChangeDetectorRef){
    this.players = this.playerService.playerArray;
  }

  public changeHeader(){
    //this.players = this.scoreService.finalPlayers;
    this.cd.markForCheck(); 
  }

}
