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
      state('idle', style({height: '*'})),
      transition('* => *', [
        style({height: '*'}),
        animate(250, style({height: 0}))
      ])
    ])
  ]
})
export class ArtCellComponent implements OnChanges {
  @Input() identifier: number;
  @Input() fullAlbum: AlbumFull;
  @Input() currentIndex: number;
  state;

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
    this.state = 'idle';
    console.log('did it');
  }
}
