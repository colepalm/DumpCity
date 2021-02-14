import { NgModule } from '@angular/core';
import { AllShowsService } from './services/show.service';
import { SongService } from './services/song.service';

@NgModule({
  providers: [
    AllShowsService,
    SongService
  ]
})
export class SharedModule { }
