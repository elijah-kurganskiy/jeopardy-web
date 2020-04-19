import { useApolloClient, useQuery } from "@apollo/react-hooks";
import React, { useCallback, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import { ROUTE_LOBBY, ROUTE_LOGIN } from "./const/routes";
import { USER_QUERY } from "./graphql/queries/user";
import Login from "./screens/Login";
import RoomList from "./screens/RoomList";
import PrivateRoute from "./utils/routes/PrivateRoute";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const client = useApolloClient();
  const onAuthorized = useCallback(() => {
    client.cache.writeData({
      data: {
        isLoggedIn: true,
      },
    });
    setLoading(false);
  }, [setLoading, client]);
  const onError = useCallback(() => {
    client.cache.writeData({
      data: {
        isLoggedIn: false,
      },
    });
    setLoading(false);
  }, [setLoading, client]);

  useQuery(USER_QUERY, {
    onCompleted: onAuthorized,
    onError,
  });

  if (loading) {
    return null;
  }
  return (
    <Router>
      <Switch>
        <Route path={ROUTE_LOGIN}>
          <Login />
        </Route>
        <PrivateRoute path={ROUTE_LOBBY}>
          <RoomList />
        </PrivateRoute>
        <Redirect to={ROUTE_LOBBY} />
      </Switch>
    </Router>
  );
}

export default App;
