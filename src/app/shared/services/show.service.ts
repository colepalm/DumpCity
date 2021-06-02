import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class AllShowsService extends Query<Response> {
  document = gql`
    query Shows($take: Int!, $skip: Int!) {
      shows(pagination: { take: $take, skip: $skip }) {
        date,
        venue {
          name,
          city,
          state
        },
        setlist {
          songsPlayed {
            song {
              name
            },
            segueType
          }
        }
      }
    }
  `;
}
