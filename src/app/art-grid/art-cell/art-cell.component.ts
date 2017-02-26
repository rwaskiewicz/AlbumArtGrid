import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';
import { MdDialog } from '@angular/material';

import { AlbumFull } from '../../dto/album-full';
import { ArtGridService } from '../art-grid.service';
import { ArtCellModalComponent } from '../art-cell-modal/art-cell-modal.component';

import { TimingService } from '../../timing/timing.service';

@Component({
  selector: 'art-cell',
  styleUrls: ['./art-cell.component.css'],
  templateUrl: './art-cell.component.html',
  animations: [
    trigger('albumState', [
      state('true', style({
        transform: 'rotateY(180deg)',
      })),
      state('false', style({
        transform: 'rotateY(0deg)',
      }))
    ])
  ]
})
export class ArtCellComponent implements OnChanges {
  @Input() identifier: number;
  @Input() fullAlbum: AlbumFull;
  @Input() currentIndex: number;
  private isFlipped = false;
  private altUrl = 'https://i.scdn.co/image/dfd044738243446dfe81a92e01a296dab21e43f1';

  constructor(private dialog: MdDialog, private timingService: TimingService) {
  }

  ngOnChanges(): void {
    if (this.identifier === this.currentIndex) {
      console.log('Hit on', this.currentIndex);
    }
  }

  openAlbumDetails() {
    let dialogRef = this.dialog.open(ArtCellModalComponent);
    dialogRef.componentInstance.title = this.fullAlbum.name;
    dialogRef.componentInstance.body = this.fullAlbum.artists[0].name;
  }

  changeState() {
    this.isFlipped = !this.isFlipped;
    console.log('Flip State is now: ', this.isFlipped);
  }
}
