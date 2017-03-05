import { Component, OnInit } from '@angular/core';

import { ArtGridService } from './art-grid.service';
import { AlbumFull } from '../dto/album-full';
import { TimingService } from '../timing/timing.service';
import { WindowService } from '../window/window.service';

@Component({
  selector: 'art-grid',
  styleUrls: ['art-grid.component.css'],
  templateUrl: './art-grid.component.html',
})
export class ArtGridComponent implements OnInit {
  initialAlbums: AlbumFull[];
  errorMessage: string;
  index: number;

  rows: number[];
  columns: number[];

  constructor(private artGridService: ArtGridService, private windowService: WindowService, private timingService: TimingService) {
    this.setupGrid();
  }

  ngOnInit(): void {
    this.artGridService.getAlbum().subscribe(
      allAlbums => {
        this.initialAlbums = allAlbums;
      },
      error => this.errorMessage = <any>error
    );

    this.timingService.emitRandomIndex().subscribe(
      index => {
        console.log('got index', index);
        this.index = index;
      }
    );
  }

  setupGrid(): void {
    this.rows = new Array(this.windowService.calculateRowCount());
    this.columns = new Array(this.windowService.calculateColumnCount());
  }
}
