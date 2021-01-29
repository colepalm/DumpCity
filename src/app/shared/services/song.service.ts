import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Injectable()
export class SongService {

  constructor(private apollo: Apollo) { }

  getSongDetails() {
    return;
  }
}
