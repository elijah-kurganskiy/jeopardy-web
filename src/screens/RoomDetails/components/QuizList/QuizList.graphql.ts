import { gql } from "apollo-boost";

export const QUERY_QUIZZES = gql`
  query Quizzes {
    quizzes {
      id
      name
    }
  }
`;
