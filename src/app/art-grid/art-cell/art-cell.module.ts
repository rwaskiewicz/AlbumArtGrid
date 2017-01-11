import { NgModule } from '@angular/core';

import { ArtCellComponent, CellDetailsComponent } from './art-cell.component';

@NgModule({
  declarations: [ArtCellComponent, CellDetailsComponent],
  entryComponents: [CellDetailsComponent],
  exports: [
    ArtCellComponent, CellDetailsComponent
  ]
})
export class ArtCellModule { }
