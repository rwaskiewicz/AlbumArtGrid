import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable()
export class TimingService {
  private emitIntervalInMilliseconds: number = 1000;
  @Output() indexEmitter: EventEmitter<number> = new EventEmitter();

  // TODO: Seed this with the upper bound based on screen resolution
  constructor() {
    setInterval(() => {
      this.emitRandomIndex([0]);
    }, this.emitIntervalInMilliseconds);
  }

  emitRandomIndex(unavailableIndices: number[]): void {
    this.indexEmitter.emit(Math.floor(Math.random() * unavailableIndices.length));
  }
}
