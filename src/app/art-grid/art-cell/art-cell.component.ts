import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { AlbumFull } from '../../dto/album-full';
import { TimingService } from '../../timing/timing.service';

@Component({
  selector: 'art-cell',
  templateUrl: './art-cell.component.html'
})
export class ArtCellComponent implements OnInit, OnChanges {
  @Input() identifier: number;
  @Input() fullAlbum: AlbumFull;

  constructor(private dialog: MdDialog, private timingService: TimingService) { }

  openAlbumDetails() {
    let dialogRef = this.dialog.open(CellDetailsComponent);
    dialogRef.componentInstance.title = this.fullAlbum.name;
    dialogRef.componentInstance.body = this.fullAlbum.artists[0].name;
  }

  ngOnInit(): void {
    this.timingService.emitRandomIndex().subscribe(
      identifier => this.identifier = identifier
    );
  }

  ngOnChanges(): void {
    console.log('Hit it');
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
