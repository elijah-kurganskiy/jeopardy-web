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

export const SUBSCRIPTION_ROOM_USERS = gql`
  subscription onRoomUserChanges($roomId: Int!) {
    onChangeUsersInRoom(roomId: $roomId) {
      id
      username
    }
  }
`;

export const MUTATION_START_GAME = gql`
  mutation StartNewGame($roomId: Int!, $quizId: Int!) {
    createGame(data: { roomId: $roomId, quizId: $quizId }) {
      id
    }
  }
`;
