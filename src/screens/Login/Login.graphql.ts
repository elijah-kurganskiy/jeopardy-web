import { gql } from "apollo-boost";

export const LOGIN_MUTATION = gql`
  mutation Login($login: String!, $password: String!) {
    login(data: { username: $login, password: $password }) {
      accessToken
    }
  }
`;

export const USER_QUERY = gql`
  query CurrentUser {
    me {
      id
      username
    }
  }
`;
