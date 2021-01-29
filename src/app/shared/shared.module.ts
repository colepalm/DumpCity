import { NgModule } from '@angular/core';
import { ShowService } from './services/show.service';
import { SongService } from './services/song.service';

@NgModule({
  providers: [
    ShowService,
    SongService
  ]
})
export class SharedModule { }
