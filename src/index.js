import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import ApolloClient from "apollo-boost";
import { ApolloProvider, InMemoryCache } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://metadata.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "ygCAkGL5aFzJpW7GLM6JxTyQE71pnOXPNJqrtKEN7dc8Y3kyjwRTUKpK3hFd7MGN",
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
