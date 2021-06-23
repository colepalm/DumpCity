import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SongComponent } from './song.component';
import { SongRoutingModule } from './song-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SongComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatTableModule,
    SharedModule,
    SongRoutingModule
  ]
})
export class SongModule { }
