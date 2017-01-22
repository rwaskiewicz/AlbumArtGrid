import { NgModule } from '@angular/core';

import { ArtCellComponent, CellDetailsComponent } from './art-cell.component';
import { TimingModule } from '../../timing/timing.module';

@NgModule({
  declarations: [ArtCellComponent, CellDetailsComponent],
  entryComponents: [CellDetailsComponent],
  exports: [
    ArtCellComponent, CellDetailsComponent
  ],
  imports: [TimingModule]
})
export class ArtCellModule { }
