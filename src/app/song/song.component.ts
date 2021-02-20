import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { SongService } from '../shared/services/song.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  song: any[];
  displayedColumns: string[] = ['name', 'firstPlayed', 'lastPlayed', 'currentGap', 'timesPlayed'];

  constructor(private songService: SongService) { }

  ngOnInit() {
    this.songService.watch({ songId: '408' })
      .valueChanges
      .pipe(
        map((result: any) => this.song = [result.data.song])
      )
      .subscribe();
  }

}
