import React from "react";
import { useParams } from "react-router-dom";
import styles from "./GameDetails.module.css";
import { useQuery } from "@apollo/react-hooks";
import { QueryGame } from "./GameDetails.types";
import { QUERY_GAME } from "./GameDetails.graphql";
import Board from "./components/Board";
export default function GameDetails() {
  let { id } = useParams();
  const { data, loading, error } = useQuery<QueryGame>(QUERY_GAME, {
    variables: {
      gameId: parseInt(id!, 10),
    },
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.log(error);
  }
  return (
    <div className={styles.game}>
      <Board round={data!.game.quiz!.rounds[0]!} />
    </div>
  );
}
