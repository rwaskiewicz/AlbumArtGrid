import { Component } from '@angular/core';

import { AlbumFull } from '../../dto/album-full';

@Component({
  selector: 'art-cell',
  templateUrl: './art-cell.component.html'
})
export class ArtCellComponent {
  fullAlbum: AlbumFull;
}
