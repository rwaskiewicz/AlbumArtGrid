import {Injectable} from '@angular/core';

import {WindowDimensions} from './window-dimensions';

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
    let numberOfColumns = Math.floor(window.innerWidth / this.albumArtWidthPixels);
    let numberOfRows = Math.floor(window.innerHeight / this.albumArtWidthPixels);

    return new WindowDimensions(numberOfColumns, numberOfRows);
  }
}
