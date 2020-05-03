import { gql } from "apollo-boost";

export const GAME_STATE_FRAGMENT = gql`
  fragment GameStateFragment on GameState {
    id
    stateName
    currentRoundId
    selectedQuestionId

    answeredPlayerIds
    openedQuestionsIds

    answeringPlayerId
    currentPlayerId

    answeringPlayer {
      username
    }
    events {
      createdAt
      finishedAt
      properties
      type
    }
  }
`;

export const QUERY_GAME = gql`
  query GameDetail($gameId: Int!) {
    game(id: $gameId) {
      id
      quiz {
        id
        name
        rounds {
          id
          name
          themes {
            id
            name
            questions {
              id
              price
              title
            }
          }
        }
      }
      state {
        ...GameStateFragment
      }
    }
  }
  ${GAME_STATE_FRAGMENT}
`;

export const MUTATION_UPDATE_STATE = gql`
  subscription OnUpdateGameState($gameId: Int!) {
    onChangeGameState(gameId: $gameId) {
      ...GameStateFragment
    }
  }
  ${GAME_STATE_FRAGMENT}
`;

export const MUTATION_SELECT_QUESTION = gql`
  mutation SelectQuestion($gameId: Int!, $questionId: Int!) {
    selectQuestion(data: { gameId: $gameId, questionId: $questionId }) {
      state {
        ...GameStateFragment
      }
    }
  }
  ${GAME_STATE_FRAGMENT}
`;

export const MUTATION_CAPTURE_QUESTION = gql`
  mutation CaptureQuestion($gameId: Int!) {
    captureQuestion(data: { gameId: $gameId }) {
      state {
        ...GameStateFragment
      }
    }
  }
  ${GAME_STATE_FRAGMENT}
`;

export const MUTATION_ANSWER_QUESTION = gql`
  mutation AnswerQuestion($gameId: Int!, $answer: String!) {
    answer(data: { gameId: $gameId, answer: $answer }) {
      state {
        ...GameStateFragment
      }
    }
  }
  ${GAME_STATE_FRAGMENT}
`;

export const QUERY_CURRENT_USER = gql`
  query CurrentUser {
    me {
      id
      username
    }
  }
`;
