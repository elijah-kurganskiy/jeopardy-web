import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { API_HOST } from "./config/server";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${API_HOST}/graphql`,
  credentials: "include",
  headers: {
    "client-name": "Jeopardy [web]",
    "client-version": "1.0.0",
  },
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
