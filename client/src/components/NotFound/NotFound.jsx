import React from "react";
import styled from "styled-components";

export default function NotFound() {
  return (
    <NotFoundStyled>
      <h3 className="not_found">Not Found</h3>
    </NotFoundStyled>
  );
}

const NotFoundStyled = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");
  /* background-color: aliceblue; */
  display: flex;
  width: 100%;
  height: 20rem;
  justify-content: center;
  align-items: center;
  color: #cfcfd0;
  .not_found {
    font-family: "Russo One", sans-serif;
  }
`;
