import { useMutation, useQuery } from "@apollo/react-hooks";
import Button from "components/Button";
import Typography from "components/Typography";
import React, { useCallback, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import QuizList from "./components/QuizList";
import UserItem from "./components/UserItem";
import {
  MUTATION_START_GAME,
  QUERY_ROOM_DETAILS,
  SUBSCRIPTION_ROOM_USERS,
} from "./RoomDetails.graphql";
import styles from "./RoomDetails.module.css";
import {
  MutationCreateGame,
  RoomDetailsQuery,
  UserUpdatesMutation,
} from "./RoomDetails.types";

function RoomDetails() {
  let { id } = useParams();
  const history = useHistory();
  const [selectedQuizId, selectQuiz] = useState<number | null>(null);
  const [startGameMutation] = useMutation<MutationCreateGame>(
    MUTATION_START_GAME
  );
  const startGame = useCallback(async () => {
    const { data } = await startGameMutation({
      variables: {
        // @ts-ignore
        roomId: parseInt(id, 10),
        // @ts-ignore
        quizId: parseInt(selectedQuizId, 10),
      },
    });
    history.push(`/games/${data!.createGame!.id}`);
  }, [startGameMutation, history, selectedQuizId, id]);
  const { loading, data, subscribeToMore } = useQuery<RoomDetailsQuery>(
    QUERY_ROOM_DETAILS,
    {
      variables: {
        id,
      },
    }
  );

  subscribeToMore<UserUpdatesMutation>({
    document: SUBSCRIPTION_ROOM_USERS,
    // @ts-ignore
    variables: { roomId: parseInt(id, 10) },
    updateQuery: (prev, { subscriptionData }) => {
      if (!subscriptionData.data) return prev;
      const users = subscriptionData.data.onChangeUsersInRoom;
      return Object.assign({}, prev, {
        room: {
          ...prev.room,
          users: users,
        },
      });
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
        <Typography className={styles.toolbar__title} type="h6" color="primary">
          {name}
        </Typography>

        <Button disabled={selectedQuizId == null} onClick={startGame}>
          START GAME
        </Button>
      </div>

      <div className={styles.details__content}>
        <div className={styles.details__users}>
          {users.map((user) => (
            <UserItem
              className={styles.details__user}
              key={user.id}
              name={user.username}
            />
          ))}
        </div>
        <div className={styles.details__quizzes}>
          <QuizList onSelectId={selectQuiz} selectedId={selectedQuizId} />
        </div>
      </div>
    </div>
  );
}

export default RoomDetails;
