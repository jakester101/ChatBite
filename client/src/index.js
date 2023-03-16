import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Layout from "./pages/AppLayout";
import SignUp from "./pages/SignUp";
import Login from "./pages/UserLogin";
import DashBoard from "./pages/DashBoard";
import Banner from "./pages/Banner";

const client = new ApolloClient({
  uri: `http://localhost:3001/graphql`, //https://evening-fjord-31018.herokuapp.com/graphql`,
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/banner" element={<Banner />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
