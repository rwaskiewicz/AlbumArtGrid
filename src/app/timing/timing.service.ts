import { Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { WindowService} from '../window/window.service';

@Injectable()
export class TimingService {
  private upperBounds: number;
  private emitIntervalInMilliseconds: number = 1000;

  constructor(private windowService: WindowService) {
    this.upperBounds = windowService.calculateTotalNumberOfCells();
  }

  // TODO: Bug wherein there are this.upperBounds running services at once
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
