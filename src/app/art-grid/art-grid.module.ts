import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtCellModule } from './art-cell/art-cell.module';

import { ArtGridComponent } from './art-grid.component';
import { ArtGridService } from './art-grid.service';

@NgModule({
  declarations: [ArtGridComponent],
  imports: [ArtCellModule, CommonModule],
  providers: [ArtGridService],
  exports: [ArtGridComponent]
})
export class ArtGridModule { }
