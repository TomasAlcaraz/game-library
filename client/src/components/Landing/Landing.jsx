import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

export default function Landing() {
  const history = useHistory();

  return (
    <LandingContainer>
      <button
        onClick={() => {
          history.push("/home");
        }}
        className="btn"
      >
        ENTER
      </button>
    </LandingContainer>
  );
}

const LandingContainer = styled.div`
  width: 100%;
  height: 100vh;
  .btn {

  }
`;
