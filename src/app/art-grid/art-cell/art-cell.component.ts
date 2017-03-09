import { Component, Input, OnChanges } from '@angular/core';
import { trigger, state, style } from '@angular/core';
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
  @Input() primaryAlbum: AlbumFull;
  @Input() currentIndex: number;
  secondaryAlbum: AlbumFull;
  private isFlipped = false;
  private isSelected = false;

  constructor(private dialog: MdDialog, private timingService: TimingService, private artGridService: ArtGridService) {
  }

  ngOnChanges(): void {
    if (this.identifier === this.currentIndex) {
      this.changeState();
    }
  }

  private changeState(): void {
    if (!this.isSelected) {
      let nextAlbum = this.artGridService.getNextAlbum();
      this.isFlipped ? this.primaryAlbum = nextAlbum : this.secondaryAlbum = nextAlbum;

      this.isFlipped = !this.isFlipped;
    }
  }

  private openAlbumDetails() {
    this.isSelected = true;

    let dialogRef = this.dialog.open(ArtCellModalComponent);
    dialogRef.componentInstance.title = this.primaryAlbum.name;
    dialogRef.componentInstance.body = this.primaryAlbum.artists[0].name;

    this.dialog.afterAllClosed.subscribe(() => this.isSelected = false);
  }
}
