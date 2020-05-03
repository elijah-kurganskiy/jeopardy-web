import { useMutation, useQuery } from "@apollo/react-hooks";
import Button from "components/Button";
import Typography from "components/Typography";
import { useDialogVisibleState } from "hooks";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import AddRoomDialog from "./components/AddRoomDialog";
import RoomItem from "./components/RoomItem";
import {
  MUTATION_ADD_ROOM,
  MUTATION_JOIN_TO_ROOM,
  QUERY_ROOM_LIST,
} from "./RoomList.graphql";
import { updateRoomsCache } from "./RoomList.helper";
import styles from "./RoomList.module.css";
import {
  MutationAddRoom,
  MutationJoinToRoom,
  QueryRooms,
} from "./RoomList.types";

function RoomList() {
  const [dialogIsVisible, openDialog, closeDialog] = useDialogVisibleState();
  const history = useHistory();
  const [joinToRoomMutation] = useMutation<MutationJoinToRoom>(
    MUTATION_JOIN_TO_ROOM
  );

  const onClickRoom = useCallback(
    async (id) => {
      await joinToRoomMutation({
        variables: {
          roomId: parseInt(id, 10),
        },
      });
      history.push(`/rooms/${id}`);
    },
    [joinToRoomMutation, history]
  );

  const { data, loading } = useQuery<QueryRooms>(QUERY_ROOM_LIST);

  const [addRoomMutation] = useMutation<MutationAddRoom>(MUTATION_ADD_ROOM);
  const addRoom = useCallback(
    async ({ name }) => {
      await addRoomMutation({
        variables: { name },
        update: updateRoomsCache,
      });
      closeDialog();
    },
    [addRoomMutation, closeDialog]
  );

  if (loading) {
    return <div>Loading</div>;
  }
  let { rooms } = data!;

  return (
    <div className={styles.roomList}>
      <div className={styles.toolbar}>
        <Typography type="h6">ROOM LIST</Typography>

        <Button className={styles.toolbar__button} onClick={openDialog}>
          New Room
        </Button>
      </div>
      {rooms?.map((room) => (
        <RoomItem
          className={styles.roomList__item}
          onClick={onClickRoom}
          key={room.id}
          id={room.id}
          name={room.name}
        />
      ))}
      <AddRoomDialog
        onSave={addRoom}
        onClose={closeDialog}
        isOpen={dialogIsVisible}
      />
    </div>
  );
}

export default React.memo(RoomList);
