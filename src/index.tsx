import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { API_HTTP_HOST, API_WS_HOST } from "./config/server";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { ApolloClient } from "apollo-client";

const httpLink = new HttpLink({
  uri: `${API_HTTP_HOST}/graphql`,
  credentials: "include",
  headers: {
    "client-name": "Jeopardy [web]",
    "client-version": "1.0.0",
  },
});

const wsLink = new WebSocketLink({
  uri: `${API_WS_HOST}/graphql`,
  options: {
    reconnect: true,
    lazy: true,
  },
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
