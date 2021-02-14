import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { AllShowsService } from '../shared/services/show.service';

@Component({
  selector: 'app-setlists',
  templateUrl: './setlists.component.html',
  styleUrls: ['./setlists.component.scss']
})
export class SetlistsComponent implements OnInit {
  shows: any;

  constructor(private allShowService: AllShowsService) { }

  ngOnInit() {
    this.allShowService.watch()
      .valueChanges
      .pipe(
        map((result: any) => this.shows = result.data.shows)
      )
      .subscribe();
  }
}
