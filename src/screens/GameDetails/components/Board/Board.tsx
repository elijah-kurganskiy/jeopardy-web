import React from "react";
import { RoundType } from "types";
import Theme from "./Theme";

interface BoardProps {
  round: RoundType;
}

function Board({ round: { themes } }: BoardProps) {
  return (
    <div>
      {themes.map((theme) => (
        <Theme key={theme.id} theme={theme} />
      ))}
    </div>
  );
}

export default Board;
