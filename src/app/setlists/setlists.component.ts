import { Component, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { PageEvent } from '@angular/material/paginator';
import { QueryRef } from 'apollo-angular';
import { Subscription } from 'rxjs';

import { AllShowsService } from '../shared/services/show.service';

@Component({
  selector: 'app-setlists',
  templateUrl: './setlists.component.html',
  styleUrls: ['./setlists.component.scss']
})
export class SetlistsComponent implements OnInit, OnDestroy {
  shows = [];

  take = 10;
  skip = 0;

  showsQuery: QueryRef<any> = this.allShowService.watch({ take: this.take, skip: this.skip });
  showsSubscription: Subscription;

  constructor(private allShowService: AllShowsService) { }

  ngOnInit() {
    this.showsSubscription = this.showsQuery
      .valueChanges
      .pipe(map((result: any) => this.shows = result.data.shows))
      .subscribe();
  }

  ngOnDestroy() {
    this.showsSubscription.unsubscribe();
  }

  refreshList(event: PageEvent) {
    this.take = event.pageSize;
    this.skip = event.pageIndex * this.take;
    this.shows = [];

    this.showsQuery.fetchMore({
      variables: { take: this.take, skip: this.skip },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) { return prev; }
        return Object.assign({}, prev, {
          shows: fetchMoreResult.shows,
        });
      },
    });
  }
}
