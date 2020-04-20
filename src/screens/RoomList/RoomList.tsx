import { useMutation, useQuery } from "@apollo/react-hooks";
import React, { useCallback, useState } from "react";
import Button from "../../components/Button";
import Typography, { TypographyType } from "../../components/Typography";
import AddRoomDialog from "./components/AddRoomDialog";
import RoomItem from "./components/RoomItem";
import { MUTATION_ADD_ROOM, QUERY_ROOM_LIST } from "./RoomList.graphql";
import { updateRoomsCache } from "./RoomList.helper";
import styles from "./RoomList.module.css";
import { MutationAddRoom, QueryRooms } from "./RoomList.types";

function RoomList() {
  const [dialogIsVisible, changeDialogVisible] = useState(false);
  const openDialog = useCallback(() => changeDialogVisible(true), [
    changeDialogVisible,
  ]);
  const closeDialog = useCallback(() => changeDialogVisible(false), [
    changeDialogVisible,
  ]);

  const onClickRoom = useCallback((id: number) => {
    console.log("ON CLICK ", id);
  }, []);

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
        <Typography typographyType={TypographyType.H6}>ROOM LIST</Typography>

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
