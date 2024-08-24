import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ScoreService {
    private bestScore: Player = {name: '', score: 0, lastCorrect: false, wrongGuess: false};
    finalHope = signal<Player[]>([]);

    addPlayer(nameInput: string){
        this.finalHope.update(values => [...values, {name: nameInput, score: 0, lastCorrect: false, wrongGuess: false}]);
        //console.log(this.finalHope()[0]);
    }

    numPlayers() {
        return this.finalHope().length;
    }

    bestPlayer(){
        this.bestScore = this.finalHope()[0];
        for(let i = 1; i < this.finalHope().length; i++){
            if(this.bestScore.score < this.finalHope()[i].score){
                this.bestScore = this.finalHope()[i];
            }
        }
        return this.bestScore;
    }

    selectFinalPlayers(){
        for(let i = 0; i < this.finalHope().length; i++){
            this.finalHope.update(values => values.filter(value => value.score > 0));
        }
        this.finalHope.update(values => 
            values.map(value => value.lastCorrect === true ? 
            {name: value.name, score: value.score, lastCorrect: false, wrongGuess: false} : value
          ));
    }
}


export interface Player {
    name: string;
    score: number;
    lastCorrect: boolean;
    wrongGuess: boolean;
}

/*
export interface finalPlayer {
    name: string;
    score: number;
}
*/
