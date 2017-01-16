import { Component, OnInit, OnChanges } from '@angular/core';

import { ArtGridService } from './art-grid.service';
import { AlbumFull } from '../dto/album-full';
import { TimingService } from '../timing/timing.service';

@Component({
  selector: 'art-grid',
  templateUrl: './art-grid.component.html',
})
export class ArtGridComponent implements OnInit, OnChanges {
  fullAlbum: AlbumFull;
  errorMessage: string;
  index: number;

  constructor(private artGridService: ArtGridService, private timingService: TimingService) { }

  ngOnInit(): void {
    this.artGridService.getAlbum().subscribe(
      albumFull => this.fullAlbum = albumFull[0].album,
      error => this.errorMessage = <any>error);

    this.timingService.emitRandomIndex().subscribe(
      index => this.index = index
    );
  }

  ngOnChanges(): void {
    console.log(this.index);
  }
}
