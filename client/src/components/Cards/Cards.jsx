import React from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card.jsx";
import { useSelector } from "react-redux";

function Cards({ pages }) {
  const games = useSelector((state) => state.Games);
  return (
    <CardsContainer>
      <div className="cards">
        {games.length &&
          games
            .slice(pages, pages + 15)
            .map((g) => (
              <Card
                key={g.id}
                rating={g.rating}
                name={g.name}
                image={g.image}
                genres={g.genres}
              />
            ))}
      </div>
    </CardsContainer>
  );
}

export default Cards;

const CardsContainer = styled.div`
  width: 82%;
  .cards {
    display: flex;
    justify-content: start;
    gap: 2.5rem;
    align-items: center;
    margin: 1rem;
    margin-top: 6rem;
    margin-bottom: 5rem;
    border-radius: 3px;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      padding: 1.1rem;
    }
  }
`;
