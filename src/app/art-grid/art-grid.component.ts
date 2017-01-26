import { Component, OnInit } from '@angular/core';

import { ArtGridService } from './art-grid.service';
import { AlbumFull } from '../dto/album-full';
import { WindowService } from '../window/window.service';
import { WindowDimensions } from '../window/window-dimensions';

@Component({
  selector: 'art-grid',
  templateUrl: './art-grid.component.html',
})
export class ArtGridComponent implements OnInit {
  fullAlbum: AlbumFull;
  errorMessage: string;
  index: number;
  identifiers: number[] = [0];
  windowDimensions: WindowDimensions;
  rows: number[];
  columns: number[];

  constructor(private artGridService: ArtGridService, private windowService: WindowService) {
    this.setupGrid();
  }

  ngOnInit(): void {
    this.artGridService.getAlbum().subscribe(
      albumFull => this.fullAlbum = albumFull[0].album,
      error => this.errorMessage = <any>error);
  }

  setupGrid(): void {
    let dimensions = this.windowService.calculateGridSize();
    console.log('Got dimensions ', dimensions);
    this.rows = new Array(dimensions.numberOfRows);
    this.columns = new Array(dimensions.numberOfColumns);
  }
}
