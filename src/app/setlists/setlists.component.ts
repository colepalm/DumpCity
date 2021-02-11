import { Component, OnInit } from '@angular/core';

import { ShowService } from '../shared/services/show.service';

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
      this.shows = result.data.shows;
    });
  }
}
