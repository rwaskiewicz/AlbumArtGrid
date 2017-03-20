import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { WindowService } from '../window/window.service';

@Injectable()
export class TimingService {
  private upperBounds: number;
  private emitIntervalInMilliseconds = 2000;
  private lastEmittedIndex = -1;

  constructor(private windowService: WindowService) {
    this.upperBounds = windowService.calculateTotalNumberOfCells();
  }

  emitRandomIndex(): Observable<number> {
    return Observable
      .interval(this.emitIntervalInMilliseconds)
      .map(() => {
        return this.generateRandomIndex();
      });
  }

  private generateRandomIndex(): number {
    let newIndex = Math.floor(Math.random() * this.upperBounds);
    while (newIndex === this.lastEmittedIndex) {
      newIndex = Math.floor(Math.random() * this.upperBounds);
    }

    this.lastEmittedIndex = newIndex;
    return newIndex;
  }
}
