import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  templateUrl: './art-cell-modal.component.html'
})
export class ArtCellModalComponent {
  public title: string;
  public body: string;

  constructor(public dialogRef: MdDialogRef<ArtCellModalComponent>) { }
}
