import { NgModule } from '@angular/core';

import { ArtCellModule } from './art-cell/art-cell.module';
import { TimingModule } from '../timing/timing.module';

import { ArtGridComponent } from './art-grid.component';
import { ArtGridService } from './art-grid.service';

@NgModule({
  declarations: [ArtGridComponent],
  imports: [ArtCellModule, TimingModule],
  providers: [ArtGridService],
  exports: [ArtGridComponent]
})
export class ArtGridModule { }
