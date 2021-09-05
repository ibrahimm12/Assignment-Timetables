import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";

function App() {

  const client = new ApolloClient({
     cache: new InMemoryCache(),
    uri: "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql",
  });
  return (
    <ApolloProvider client={client}>
      <Home></Home>
      
    </ApolloProvider>
  );
}

export default App;
