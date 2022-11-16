import React from "react";
import styled from "styled-components";
// import NotFound from "../NotFound/NotFound.jsx";

function Card(props) {
  return (
    <>
      <CardContainer>
        <img src={props.props.image}></img>
        <h3>{props.props.name}</h3>
        <div>
          {props.props.genres.map((g) => {
            return <span>{g.name}</span>;
          })}
        </div>
      </CardContainer>
    </>
  );
}

export default Card;

const CardContainer = styled.nav`
  @import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");
  display: flex;
  flex-wrap: wrap;
  height: 18rem;
  width: 350px;
  justify-content: center;
  background-color: #344d5f;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  margin-top: 4rem;
  transition: all 0.5s ease;
  h3 {
    font-family: "Rubik", sans-serif;
    font-size: 1.1rem;
  }
  &:hover {
    margin-top: 0rem;
  }
  img {
    width: 350px;
    aspect-ratio: auto 360 / 210;
    height: 200px;
    border-top-left-radius: 3px 3px;
    border-top-right-radius: 3px 3px;
  }
`;
