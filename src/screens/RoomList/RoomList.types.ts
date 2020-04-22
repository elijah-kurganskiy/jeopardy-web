export interface Room {
  id: number;
  name: string;
}

export interface QueryRooms {
  rooms: Room[];
}

export interface MutationAddRoom {
  createRoom: Room;
}

export interface MutationJoinToRoom {
  joinToRoom: Room;
}
