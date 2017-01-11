import { Component, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { AlbumFull } from '../../dto/album-full';

@Component({
  selector: 'art-cell',
  templateUrl: './art-cell.component.html'
})
export class ArtCellComponent {
  @Input() fullAlbum: AlbumFull;

  constructor(private dialog: MdDialog) { }

  openAlbumDetails() {
    this.dialog.open(CellDetailsComponent);
  }
}

@Component({
  template: `
    <h1 md-dialog-title>Album Title</h1>
    <div md-dialog-content>Album Details</div>
    <div md-dialog-actions>
      <button md-button (click)="dialogRef.close()">Close</button>
    </div>
`
})
export class CellDetailsComponent {
  constructor(public dialogRef: MdDialogRef<CellDetailsComponent>) { }
}
