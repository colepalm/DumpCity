import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class SongService extends Query<Response> {
  document = gql`
    query Song($songId: String) {
      song(song: { id: $songId }) {
        name,
        firstPlayed {
          date
        },
        lastPlayed {
          date
        },
        currentGap,
        timesPlayed {
          set {
            show {
              date,
              venue {
                name,
                city,
                state
              }
            }
            setNumber
          }
        }
      }
    }
  `;
}
