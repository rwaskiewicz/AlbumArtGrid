import { NgModule } from '@angular/core';

import { ArtCellModule } from './art-cell/art-cell.module';

import { ArtGridComponent } from './art-grid.component';
import { ArtGridService } from './art-grid.service';

@NgModule({
  declarations: [ArtGridComponent],
  imports: [ArtCellModule],
  providers: [ArtGridService],
  exports: [ArtGridComponent]
})
export class ArtGridModule { }
