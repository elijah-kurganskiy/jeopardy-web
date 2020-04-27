import { gql } from "apollo-boost";

export const QUERY_GAME = gql`
  query GameDetail($gameId: Int!) {
    game(id: $gameId) {
      id
      quiz {
        id
        name
        rounds {
          name
          themes {
            id
            name
            questions {
              id
              price
              title
            }
          }
        }
      }
      state {
        stateName
      }
    }
  }
`;
