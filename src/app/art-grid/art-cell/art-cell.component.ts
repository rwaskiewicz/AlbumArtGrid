import { Component, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { AlbumFull } from '../../dto/album-full';
import { ArtGridService } from '../art-grid.service';
import { TimingService } from '../../timing/timing.service';

@Component({
  selector: 'art-cell',
  templateUrl: './art-cell.component.html'
})
export class ArtCellComponent {
  @Input() identifier: number;
  @Input() fullAlbum: AlbumFull;

  constructor(private dialog: MdDialog, private timingService: TimingService) {
    timingService.emitRandomIndex().subscribe(
      index => {
        if (index === this.identifier) {
          this.openAlbumDetails();
        }
      }
    )
  }

  openAlbumDetails() {
    let dialogRef = this.dialog.open(CellDetailsComponent);
    dialogRef.componentInstance.title = this.fullAlbum.name;
    dialogRef.componentInstance.body = this.fullAlbum.artists[0].name;
  }
}

@Component({
  template: `
    <h1 md-dialog-title>Album Title: {{title}}</h1>
    <p>Artist: {{body}}</p>
    <div md-dialog-actions>
      <button md-dialog-close (click)="dialogRef.close()">Close</button>
    </div>
`
})
export class CellDetailsComponent {
  public title: string;
  public body: string;

  constructor(public dialogRef: MdDialogRef<CellDetailsComponent>) { }
}
