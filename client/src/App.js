import "./App.scss";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Home from "./containers/Home";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
