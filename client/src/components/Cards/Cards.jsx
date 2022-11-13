import React from "react";
import styled from "styled-components";
import Card from "../Card/Card.jsx";

function Cards() {
  return (
    <>
      <CardsContainer>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </CardsContainer>
    </>
  );
}

export default Cards;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0.8rem;
  padding: 2rem;
  gap: 2rem;
  border: #008B7A solid;
  border-radius: 3px;
  flex-wrap: wrap;
  margin: 0.8rem;
  @media (max-width: 768px) {
    padding: 1.1rem;
  }
`;
