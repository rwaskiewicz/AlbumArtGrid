import { Component, OnInit } from '@angular/core';

import { ArtGridService } from './art-grid.service';
import { AlbumFull } from '../dto/album-full';

@Component({
  selector: 'art-grid',
  templateUrl: './art-grid.component.html',
})
export class ArtGridComponent implements OnInit {
  fullAlbum: AlbumFull;

  constructor(private artGridService: ArtGridService) { }

  ngOnInit(): void {
    this.artGridService.getAlbum().subscribe(
      albumFull => this.fullAlbum = albumFull[0].album
    );
  }
}
