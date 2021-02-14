import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongComponent } from './song.component';
import { SongRoutingModule } from './song-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SongComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SongRoutingModule
  ]
})
export class SongModule { }
