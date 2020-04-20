import { useQuery } from "@apollo/react-hooks";
import React, { useCallback } from "react";
import Button from "../../components/Button";
import Typography, { TypographyType } from "../../components/Typography";
import RoomItem from "./components/RoomItem";
import { ROOM_LIST } from "./RoomList.graphql";
import styles from "./RoomList.module.css";

interface Room {
  id: number;
  name: string;
}

export default function RoomList() {
  const onClickRoom = useCallback((id: number) => {
    console.log("ON CLICK ", id);
  }, []);

  const { data, loading } = useQuery<{ rooms: Room[] }>(ROOM_LIST);
  if (loading) {
    return <div>Loading</div>;
  }
  let { rooms } = data!;

  return (
    <div className={styles.roomList}>
      <div className={styles.toolbar}>
        <Typography typographyType={TypographyType.H6}>ROOM LIST</Typography>

        <Button className={styles.toolbar__button}>New Room</Button>
      </div>
      {rooms?.map((room) => (
        <RoomItem
          onClick={onClickRoom}
          key={room.id}
          id={room.id}
          name={room.name}
        />
      ))}
    </div>
  );
}
