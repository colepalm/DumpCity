import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class AllShowsService extends Query<Response> {
  document = gql`
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
    }
  `;
}
