import { gql } from "apollo-boost";

export const ROOM_LIST = gql`
  query RoomList {
    rooms {
      id
      name
    }
  }
`;
