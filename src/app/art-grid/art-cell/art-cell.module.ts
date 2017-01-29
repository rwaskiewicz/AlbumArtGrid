import { NgModule } from '@angular/core';

import { ArtCellComponent } from './art-cell.component';
import { ArtCellModalModule } from '../art-cell-modal/art-cell-modal.module';

@NgModule({
  imports: [ArtCellModalModule],
  declarations: [ArtCellComponent],
  exports: [
    ArtCellComponent
  ]
})
export class ArtCellModule { }
