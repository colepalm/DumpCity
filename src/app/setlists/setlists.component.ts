import { Component, OnInit } from '@angular/core';

import { ShowService } from '../show.service';

@Component({
  selector: 'app-setlists',
  templateUrl: './setlists.component.html',
  styleUrls: ['./setlists.component.scss']
})
export class SetlistsComponent implements OnInit {
  private shows: any;

  constructor(private showService: ShowService) { }

  ngOnInit() {
    this.showService.getShows().subscribe((result: any) => {
      this.shows = result.data.shows;
    });
  }

}
