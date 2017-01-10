import { Component, OnInit } from '@angular/core';

import { AlbumFull } from '../dto/album-full';
import { ArtGridService } from './art-grid.service';

@Component({
  selector: 'art-grid',
  providers: [ArtGridService],
  templateUrl: './art-grid.component.html'
})
export class ArtGridComponent implements OnInit {
  fullAlbum: AlbumFull;

  constructor(private artGridService: ArtGridService) { }

  ngOnInit(): void {
    this.artGridService.getAlbum().subscribe(
      albumFull => this.fullAlbum = albumFull
    );
    console.log(this.fullAlbum);
  }
}
