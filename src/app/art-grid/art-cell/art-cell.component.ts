import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';
import { MdDialog } from '@angular/material';

import { AlbumFull } from '../../dto/album-full';
import { ArtGridService } from '../art-grid.service';
import { ArtCellModalComponent } from '../art-cell-modal/art-cell-modal.component';

import { TimingService } from '../../timing/timing.service';

@Component({
  selector: 'art-cell',
  templateUrl: './art-cell.component.html',
  animations: [
    trigger('albumState', [
      state('true' , style({ opacity: 1, transform: 'scale(1.0)' })),
      state('false', style({ opacity: 0.5, transform: 'scale(0.50)'  })),
      transition('1 => 0', animate('300ms')),
      transition('0 => 1', animate('900ms'))
    ])
  ]
})
export class ArtCellComponent implements OnChanges {
  @Input() identifier: number;
  @Input() fullAlbum: AlbumFull;
  @Input() currentIndex: number;
  private isFlipped = true;

  constructor(private dialog: MdDialog, private timingService: TimingService) { }

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
    console.log('did it', this.isFlipped);
  }
}
