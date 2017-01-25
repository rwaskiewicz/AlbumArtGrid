import { Injectable } from '@angular/core';

import { WindowDimensions } from './window-dimensions';

@Injectable()
export class WindowService {
  private windowDimensions = new WindowDimensions();
  // TODO: Temporary placement/hardcoding
  private albumArtWidthPixels: number = 300;

  // TODO: This doesn't handle resizing or anything
  constructor() {
    console.log(this.windowDimensions);
  }

  calculateGridSize(): WindowDimensions {
    return new WindowDimensions(this.calculateColumnCount(), this.calculateRowCount());
  }

  calculateTotalNumberOfCells(): number {
    return this.calculateColumnCount() * this.calculateRowCount();
  }

  private calculateColumnCount(): number {
    return Math.floor(window.innerWidth / this.albumArtWidthPixels);
  }

  private calculateRowCount(): number {
    return Math.floor(window.innerHeight / this.albumArtWidthPixels);
  }
}
