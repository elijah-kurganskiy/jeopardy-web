import { useQuery } from "@apollo/react-hooks";
import { ROUTE_LOGIN } from "const/routes";
import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { IS_LOGGED_IN } from "../../graphql/queries/user";

type Props = RouteProps;
export default function PrivateRoute({ children, ...rest }: Props) {
  const { data } = useQuery<{ isLoggedIn: boolean }>(IS_LOGGED_IN, {
    fetchPolicy: "cache-only",
  });

  return (
    <Route
      {...rest}
      render={({ location }) =>
        data?.isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: ROUTE_LOGIN,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
