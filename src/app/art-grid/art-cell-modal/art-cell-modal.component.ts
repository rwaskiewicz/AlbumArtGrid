import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { AlbumFull } from '../../dto/album-full';

@Component({
  styleUrls: ['./art-cell-modal.component.css'],
  templateUrl: './art-cell-modal.component.html'
})
export class ArtCellModalComponent {
  public album: AlbumFull;

  constructor(public dialogRef: MdDialogRef<ArtCellModalComponent>) { }
}
