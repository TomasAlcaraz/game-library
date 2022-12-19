import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Landing from "./components/Landing/Landing.jsx";
import Form from "./components/Form/Form.jsx";
import Detail from "./components/Detail/Detail.jsx";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <AppContainer>
      <Route path="/" component={Navbar} />
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/form" component={Form} />
      <Route exact path="/videogame/:id" component={Detail} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  padding-bottom: 1rem;
  width: 100%;
  height: 100%;
`;
