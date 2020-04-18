import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { API_HOST } from "./config/server";
import Login from "./screens/Login";

const client = new ApolloClient({
  uri: `${API_HOST}/graphql`,
  headers: {
    "client-name": "Jeopardy [web]",
    "client-version": "1.0.0",
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
