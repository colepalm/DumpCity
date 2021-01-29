import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class ShowService {

  constructor(private apollo: Apollo) { }

  getShows() {
    return this.apollo.query({
      query: gql`
        query shows {
          shows {
            date,
            venue {
              name,
              city,
              state
            },
            setlist {
              songsPlayed {
                song {
                  id,
                  name
                }
              }
            }
          }
        }`
    });
  }
}
