import { Component, Input } from '@angular/core';
import { MdDialog } from '@angular/material';

import { AlbumFull } from '../../dto/album-full';

@Component({
  selector: 'art-cell',
  templateUrl: './art-cell.component.html'
})
export class ArtCellComponent {
  @Input() fullAlbum: AlbumFull;

  constructor(private dialog: MdDialog) { }

  openAlbumDetails() {
    let dialogRef = this.dialog.open(CellDetailsComponent);
  }
}

@Component({
  template: `<p>Details Here!</p>`
})
export class CellDetailsComponent {}
