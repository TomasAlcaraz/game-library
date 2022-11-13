import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
// import Card from "./components/Card/Card.jsx";
// import Cards from "./components/Cards/Cards.jsx";

function App() {
  return (
    <>
      <AppContainer>
        <div className="App">
          <div className="NavBar">
            <Route path="/" component={Navbar} />
          </div>
            <Route exact path="/" component={LandingPage} />
        </div>
      </AppContainer>
    </>
  );
}

export default App;

const AppContainer = styled.nav`
  width: 100%;
  height: 100vh;
`