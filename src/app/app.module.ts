import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ArtGridComponent } from './art-grid/art-grid.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
