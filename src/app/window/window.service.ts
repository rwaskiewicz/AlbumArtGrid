import { Injectable } from '@angular/core';

@Injectable()
export class WindowService {
  // TODO: Temporary placement/hardcoding
  private albumArtWidthInPixels: number = 300;

  // TODO: This doesn't handle resizing or anything
  constructor() { }

  calculateTotalNumberOfCells(): number {
    return this.calculateColumnCount() * this.calculateRowCount();
  }

  calculateColumnCount(): number {
    return Math.floor(window.innerWidth / this.albumArtWidthInPixels);
  }

  calculateRowCount(): number {
    return Math.floor(window.innerHeight / this.albumArtWidthInPixels);
  }
}
