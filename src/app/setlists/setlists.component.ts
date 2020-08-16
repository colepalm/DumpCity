import { Component, OnInit } from '@angular/core';

import { ShowService } from '../shared/show.service';

@Component({
  selector: 'app-setlists',
  templateUrl: './setlists.component.html',
  styleUrls: ['./setlists.component.scss']
})
export class SetlistsComponent implements OnInit {
  shows: any;

  constructor(private showService: ShowService) { }

  ngOnInit() {
    this.showService.getShows().subscribe((result: any) => {
      this.shows = result.data.shows.slice(0, 100);
      for (const show of this.shows) {
        show.date = new Date(show.date);
      }
    });
  }

}
