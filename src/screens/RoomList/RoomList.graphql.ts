import { gql } from "apollo-boost";

export const QUERY_ROOM_LIST = gql`
  query RoomList {
    rooms {
      id
      name
    }
  }
`;

export const MUTATION_ADD_ROOM = gql`
  mutation AddRoom($name: String!) {
    createRoom(name: $name) {
      id
      name
    }
  }
`;

export const MUTATION_JOIN_TO_ROOM = gql`
  mutation AddRoom($roomId: Int!) {
    joinToRoom(roomId: $roomId) {
      id
      name
      users {
        id
        username
      }
    }
  }
`;
