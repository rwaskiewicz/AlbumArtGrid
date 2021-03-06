import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtCellModule } from './art-cell/art-cell.module';

import { ArtGridComponent } from './art-grid.component';
import { ArtGridService } from './art-grid.service';

import { TimingModule } from '../timing/timing.module';
import { WindowModule } from '../window/window.module';

@NgModule({
  declarations: [ArtGridComponent],
  imports: [ArtCellModule, CommonModule, TimingModule, WindowModule],
  providers: [ArtGridService],
  exports: [ArtGridComponent]
})
export class ArtGridModule { }
