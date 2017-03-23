import { Component, Input, OnChanges } from '@angular/core';
import { trigger, state, style } from '@angular/core';
import { MdDialog } from '@angular/material';

import { AlbumFull } from '../../dto/album-full';
import { ArtGridService } from '../art-grid.service';
import { ArtCellModalComponent } from '../art-cell-modal/art-cell-modal.component';

@Component({
  selector: 'art-cell',
  styleUrls: ['./art-cell.component.css'],
  templateUrl: './art-cell.component.html',
  animations: [
    trigger('albumState', [
      state('1', style({
        transform: 'rotateY(180deg)',
      })),
      state('0', style({
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

  constructor(private dialog: MdDialog, private artGridService: ArtGridService) {
  }

  ngOnChanges(): void {
    if (this.identifier === this.currentIndex) {
      this.changeState();
    }
  }

  private changeState(): void {
    if (!this.isSelected) {
      const nextAlbum = this.artGridService.getNextAlbum();
      this.isFlipped ? this.primaryAlbum = nextAlbum : this.secondaryAlbum = nextAlbum;

      this.isFlipped = !this.isFlipped;
    }
  }

  private openAlbumDetails() {
    let currentAlbum: AlbumFull;
    this.isFlipped ? currentAlbum = this.secondaryAlbum : currentAlbum = this.primaryAlbum;

    this.isSelected = true;

    const dialogRef = this.dialog.open(ArtCellModalComponent);
    dialogRef.componentInstance.album = currentAlbum;

    this.dialog.afterAllClosed.subscribe(() => this.isSelected = false);
  }
}
