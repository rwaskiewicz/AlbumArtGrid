import { Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { WindowService} from '../window/window.service';

@Injectable()
export class TimingService {
  private upperBounds: number;
  private emitIntervalInMilliseconds = 2000;

  constructor(private windowService: WindowService) {
    this.upperBounds = windowService.calculateTotalNumberOfCells();
  }

  emitRandomIndex(): Observable<number> {
    return Observable
      .interval(this.emitIntervalInMilliseconds)
      .map(() => {
        return Math.floor(Math.random() * this.upperBounds);
      });
  }
}
