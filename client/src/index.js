import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const clientLibrary = new ApolloClient({
  uri: process.env.API ?? "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

clientLibrary.query({
  query: gql`
    query Reviews {
      reviews {
        _id
      }
    }
  `,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* create a global library like object called a provider that allows
    sub components to access the apollo client from anywhere in the app
     */}
    <ApolloProvider client={clientLibrary}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
