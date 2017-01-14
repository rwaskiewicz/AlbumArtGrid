import { Injectable } from '@angular/core';

@Injectable()
export class TimingService {
  emitRandomIndex(upperBound: number): number {
    return Math.floor(Math.random() * upperBound);
  }
}
