import { Component, inject, signal, Inject } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { PlayerService } from '../player.service';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule,
    RouterOutlet,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    CommonModule
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})

export class WelcomeComponent {
  constructor(private router: Router) { }
  readonly dialog = inject(MatDialog);
  readonly numPlayers = signal('');
  playerService = inject(PlayerService);
  public isPlay = true;
  public versionNum: string = '1.5.1';

  public openDialog(players: number): void{
    this.dialog.open(WelcomePlayerComponent,{
      height: '70%',
      width: '60%',
      data: {numOfPlayers: players}
    })
  }

  public goToBoard(){
    this.router.navigateByUrl('/board');
  }

}

@Component({
  selector: 'welcome-players',
  standalone: true,
  imports: [
    MatDialogModule,
    RouterLink,
    RouterOutlet,
    RouterModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: 'welcome-players.html',
  styleUrl: './welcome.component.css'
})
export class WelcomePlayerComponent {
  constructor(private router: Router, @Inject(MAT_DIALOG_DATA) public data: any)  { }
  readonly dialogRef = inject(MatDialogRef<WelcomeComponent>);
  playerService = inject(PlayerService);

  public name1 = 'Player 1';
  public name2 = 'Player 2';
  public name3 = 'Player 3';
  public nums = this.data.numOfPlayers;

  confirm(): void{
    if(this.nums >= 1){
      this.playerService.addPlayer(this.name1);
    }
    if(this.nums >= 2){
      this.playerService.addPlayer(this.name2);
    }
    if(this.nums == 3){
      this.playerService.addPlayer(this.name3);
    }
    this.router.navigateByUrl('/board', {skipLocationChange: true});
  }
  
}