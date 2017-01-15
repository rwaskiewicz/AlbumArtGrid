import { Component, OnInit } from '@angular/core';

import { ArtGridService } from './art-grid.service';
import { AlbumFull } from '../dto/album-full';
import { TimingService } from '../timing/timing.service';

@Component({
  selector: 'art-grid',
  templateUrl: './art-grid.component.html',
})
export class ArtGridComponent implements OnInit {
  fullAlbum: AlbumFull;
  errorMessage: string;

  constructor(private artGridService: ArtGridService, private timingService: TimingService) {
    console.log('Got: ', timingService.emitRandomIndex([0]));
  }

  ngOnInit(): void {
    this.artGridService.getAlbum().subscribe(
      albumFull => this.fullAlbum = albumFull[0].album,
      error => this.errorMessage = <any>error);
  }
}
