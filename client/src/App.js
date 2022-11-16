import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Landing from "./components/Landing/Landing";
import Form from "./components/Form/Form";

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/form">
        <Form />
      </Route>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.nav`
  width: 100%;
  height: 100vh;
`;
