import { gql } from "apollo-boost";

export const USER_QUERY = gql`
  query CurrentUser {
    me {
      id
      username
    }
  }
`;

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;
