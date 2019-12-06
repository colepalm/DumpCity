import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private apollo: Apollo) { }

  getShows() {
    return this.apollo.watchQuery({
      query: gql`
        query {
          shows {
            date
          }
        }`
    }).valueChanges;
  }
}
