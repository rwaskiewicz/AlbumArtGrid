import { Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TimingService {
  private upperBounds: number;
  private emitIntervalInMilliseconds: number = 1000;

  //TODO: Make the upper bounds an argument to be set dynamically
  constructor() {
    this.upperBounds = 10;
  }

  emitRandomIndex(): Observable<number> {
    return Observable
      .interval(this.emitIntervalInMilliseconds)
      .map(() => {
        let rand = Math.floor(Math.random() * this.upperBounds);
        console.log(rand);
        return rand;
      });
  }
}
