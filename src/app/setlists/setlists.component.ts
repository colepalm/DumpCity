import { Component, OnInit } from '@angular/core';

import { ShowService } from '../show.service';

@Component({
  selector: 'app-setlists',
  templateUrl: './setlists.component.html',
  styleUrls: ['./setlists.component.scss']
})
export class SetlistsComponent implements OnInit {

  constructor(private showService: ShowService) { }

  ngOnInit() {
    this.showService.getShows().subscribe(result => {
      console.log(result);
    });
  }

}
