import { QUERY_ROOM_LIST } from "./RoomList.graphql";
import { MutationUpdaterFn } from "apollo-boost";
import { MutationAddRoom, QueryRooms } from "./RoomList.types";

export const updateRoomsCache: MutationUpdaterFn<MutationAddRoom> = (
  cache,
  { data }
) => {
  const { createRoom: room } = data!;
  const { rooms } = cache.readQuery<QueryRooms>({
    query: QUERY_ROOM_LIST,
  })!;
  cache.writeQuery({
    query: QUERY_ROOM_LIST,
    data: { rooms: rooms.concat([room]) },
  });
};
