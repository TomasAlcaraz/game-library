import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Landing from "./components/Landing/Landing.jsx";
import Form from "./components/Form/Form.jsx";

function App() {
  return (
    <AppContainer>
        <Route path="/" component={Navbar} />
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/form" component={Form} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.nav`
  width: 100%;
  height: 100vh;
`;
