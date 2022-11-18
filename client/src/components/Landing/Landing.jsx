import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
export default function Landing() {


  return (
    <LandingContainer>
      <NavLink>
        <button>ENTER</button>
      </NavLink>
    </LandingContainer>
  );
}

const LandingContainer = styled.div`
  width: 100%;
  height: 100vh;
  .btn {
  }
`;
