import { Injectable, signal } from '@angular/core';
import { Player } from './player';
@Injectable({
  providedIn: 'root',
})

export class PlayerService {
    private bestScore: Player = {name: '', score: 0, lastCorrect: false, wrongGuess: false};
    playerArray = signal<Player[]>([]);

    addPlayer(nameInput: string){
        this.playerArray.update(values => [...values, {name: nameInput, score: 0, lastCorrect: false, wrongGuess: false}]);
    }

    numPlayers() {
        return this.playerArray().length;
    }

    bestPlayer(){
        this.bestScore = this.playerArray()[0];
        for(let i = 1; i < this.playerArray().length; i++){
            if(this.bestScore.score < this.playerArray()[i].score){
                this.bestScore = this.playerArray()[i];
            }
        }
        return this.bestScore;
    }

    selectFinalPlayers(){
        for(let i = 0; i < this.playerArray().length; i++){
            this.playerArray.update(values => values.filter(value => value.score > 0));
        }
        this.playerArray.update(values => 
            values.map(value => value.lastCorrect === true ? 
            {name: value.name, score: value.score, lastCorrect: false, wrongGuess: false} : value
          ));
    }
}