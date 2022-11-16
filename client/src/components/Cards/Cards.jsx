import React from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card.jsx";
import { useSelector } from "react-redux";

function Cards(pages) {
  const Games = useSelector((state) => state.Games);
  return (
    <>
      <CardsContainer>
        {Games.length &&
          Games.slice(pages, pages + 15).map((g) => (
            <Card key={g.id} props={g} />
          ))}
      </CardsContainer>
    </>
  );
}

export default Cards;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 1rem;
  border-radius: 3px;
  flex-wrap: wrap;
  width: 90%;
  @media (max-width: 768px) {
    padding: 1.1rem;
  }
`;
