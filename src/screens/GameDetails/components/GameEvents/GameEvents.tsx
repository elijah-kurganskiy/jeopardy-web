import { isWithinInterval } from "date-fns";
import React from "react";
import { useGameState } from "service/game";
import { useTimer } from "../../../../hooks";
import IncorrectAnswerDialog from "./components/IncorrectAnswerDialog";

const GameEvents = () => {
  useTimer(1000);
  const { events } = useGameState();
  const now = new Date();
  const firstEvent = events.find((event) =>
    isWithinInterval(now, {
      start: new Date(event.createdAt),
      end: new Date(event.finishedAt),
    })
  );

  if (!firstEvent) {
    return null;
  }

  switch (firstEvent.type) {
    case "on_incorrect_answer":
      return <IncorrectAnswerDialog {...firstEvent.properties} />;
    default:
      return null;
  }
};

export default React.memo(GameEvents);
