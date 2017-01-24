import {Injectable} from '@angular/core';

import {WindowDimensions} from './window-dimensions';

@Injectable()
export class WindowService {
  private windowDimensions = new WindowDimensions();

  // TODO: This doesn't handle resizing or anything
  constructor() {
    this.windowDimensions.availableHeight = window.innerHeight;
    this.windowDimensions.availableWidth = window.innerWidth;
    console.log(this.windowDimensions);
  }
}
