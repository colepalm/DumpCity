import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongComponent } from './song.component';
import { SongRoutingModule } from './song-routing.module';

@NgModule({
  declarations: [
    SongComponent
  ],
  imports: [
    CommonModule,
    SongRoutingModule
  ]
})
export class SongModule { }
