import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "./background_landingpage.png";

export default function Landing() {
  return (
    <LandingContainer>
      <Link to="/home">
        <button className="start">START</button>
      </Link>
    </LandingContainer>
  );
}

const LandingContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url(${img});
  justify-content: center;
  align-items: center;
  .start {
    cursor: pointer;
    background-color: #15a8d0;
    width: 12rem;
    height: 3.5rem;
    border: none;
    outline: none;
    border-radius: 1.1rem;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 1.3rem;
    transition: all 0.5s ease;
    &:hover {
      width: 13rem;
      font-size: 1.4rem;
      height: 4rem;
      background-color: #17b4df;
    }
  }
`;
