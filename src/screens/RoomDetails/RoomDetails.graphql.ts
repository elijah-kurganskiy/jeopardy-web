import { gql } from "apollo-boost";

export const QUERY_ROOM_DETAILS = gql`
  query RoomDetails($id: ID!) {
    room(id: $id) {
      id
      name
      users {
        id
        username
      }
    }
  }
`;
