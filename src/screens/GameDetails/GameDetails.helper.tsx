import { useMutation, useQuery } from "@apollo/react-hooks";
import { useCallback, useEffect, useMemo } from "react";
import {
  MUTATION_CAPTURE_QUESTION,
  MUTATION_SELECT_QUESTION,
  MUTATION_UPDATE_STATE,
  QUERY_GAME,
} from "./GameDetails.graphql";
import { QueryGame, SubscriptionOnGameStateChange } from "./GameDetails.types";

export function useCurrentRound(data?: QueryGame) {
  const rounds = data?.game.quiz.rounds || [];
  const currentRoundId = data?.game.state.currentRoundId;

  return useMemo(() => rounds.find(({ id }) => id === currentRoundId), [
    rounds,
    currentRoundId,
  ])!;
}

export function useSelectedQuestion(data?: QueryGame) {
  const currentRound = useCurrentRound(data);
  const selectedQuestionId = data?.game.state.selectedQuestionId;

  return useMemo(() => {
    if (!currentRound) {
      return undefined;
    }
    for (const theme of currentRound.themes) {
      const question = theme.questions.find(
        ({ id }) => id === selectedQuestionId
      );
      if (question) {
        return question;
      }
    }
  }, [currentRound, selectedQuestionId])!;
}

export function useGameQuery(gameId?: number) {
  const { subscribeToMore, ...data } = useQuery<QueryGame>(QUERY_GAME, {
    variables: {
      gameId,
    },
  });
  useEffect(() => {
    subscribeToMore<SubscriptionOnGameStateChange>({
      document: MUTATION_UPDATE_STATE,
      variables: { gameId: gameId },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        return Object.assign({}, prev, {
          game: {
            ...prev.game,
            state: subscriptionData.data.onChangeGameState,
          },
        });
      },
    });
  }, [subscribeToMore, gameId]);
  return data;
}

export function useOnSelectQuestion(gameId: number) {
  const [selectQuestion] = useMutation(MUTATION_SELECT_QUESTION, {
    ignoreResults: true,
  });
  return useCallback(
    async (questionId: number) => {
      await selectQuestion({
        variables: {
          gameId,
          questionId,
        },
      });
      return null;
    },
    [selectQuestion, gameId]
  );
}

export function useOnCaptureQuestion(gameId: number) {
  const [captureQuestion] = useMutation(MUTATION_CAPTURE_QUESTION, {
    ignoreResults: true,
  });
  return useCallback(async () => {
    await captureQuestion({
      variables: {
        gameId,
      },
    });
    return null;
  }, [captureQuestion, gameId]);
}
