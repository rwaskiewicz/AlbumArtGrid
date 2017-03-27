import { Injectable } from '@angular/core';

@Injectable()
export class WindowService {
  // TODO: Temporary placement/hardcoding
  private albumArtWidthInPixels = 300;

  calculateTotalNumberOfCells(): number {
    return this.calculateColumnCount() * this.calculateRowCount();
  }

  calculateColumnCount(): number {
    return Math.ceil(window.innerWidth / this.albumArtWidthInPixels);
  }

  calculateRowCount(): number {
    return Math.ceil(window.innerHeight / this.albumArtWidthInPixels);
  }
}
