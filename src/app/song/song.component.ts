import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { SongService } from '../shared/services/song.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  song: any;
  displayedColumns: string[] = ['date', 'venue', 'setNumber'];

  constructor(private route: ActivatedRoute, private songService: SongService) { }

  ngOnInit() {
    const songId = this.route.snapshot.paramMap.get('id');

    this.songService.watch({ songId })
      .valueChanges
      .pipe(map((result: any) => this.song = result.data.song))
      .subscribe();
  }
}
