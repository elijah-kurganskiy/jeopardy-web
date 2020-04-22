import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { useParams } from "react-router-dom";
import Typography, {
  TypographyColor,
  TypographyType,
} from "../../components/Typography";
import UserItem from "./components/UserItem";
import { QUERY_ROOM_DETAILS } from "./RoomDetails.graphql";
import styles from "./RoomDetails.module.css";
import { RoomDetailsQuery } from "./RoomDetails.types";

function RoomDetails() {
  let { id } = useParams();
  const { loading, data } = useQuery<RoomDetailsQuery>(QUERY_ROOM_DETAILS, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <div>Loading ...</div>;
  }
  const {
    room: { name, users },
  } = data!;
  return (
    <div className={styles.details}>
      <div className={styles.toolbar}>
        <Typography
          className={styles.toolbar__title}
          typographyType={TypographyType.H6}
          typographyColor={TypographyColor.PRIMARY}
        >
          {name}
        </Typography>
      </div>
      {users.map((user) => (
        <UserItem
          className={styles.details__user}
          key={user.id}
          name={user.username}
        />
      ))}
    </div>
  );
}

export default RoomDetails;
