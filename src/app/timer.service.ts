import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class TimerService {
    countDown = signal(0);
    displayTimer = 0;


    timerDown(givenTime: number){
        console.log('Begin Timer with: ' + givenTime)
        this.countDown.update(value => value = givenTime);
        this.displayTimer = window.setInterval(() => {
          this.countDown.update(value => value - 1);
          console.log(this.countDown());
        }, 1000)
       }

    stopInterval(){
        clearInterval(this.displayTimer);
    }

    hideCountDown(){
        this.countDown.update(value => value = -1);
    }
}