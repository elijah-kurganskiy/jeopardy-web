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
