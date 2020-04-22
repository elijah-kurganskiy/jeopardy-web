export interface RoomDetailsQuery {
  room: {
    id: number;
    name: string;
    users: Array<{
      id: number;
      username: string;
    }>;
  };
}

export interface MutationCreateGame {
  createGame: {
    id: number;
  };
}
