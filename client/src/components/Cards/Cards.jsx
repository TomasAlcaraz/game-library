import React from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card.jsx";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import loading from "./loading.gif";

function Cards({ pages }) {
  const games = useSelector((state) => state.Games);
  const filters = useSelector((state) => state.Filters);
  function selection() {
    if (filters.length) {
      return filters;
    }
    return games;
  }
  return (
    <CardsContainer>
      <div className="cards">
        {selection().length ? (
          selection()
            .slice(pages, pages + 15)
            .map((g) => (
              <NavLink to={`/videogame/${g.id}`} className="active">
                <Card
                  key={g.id}
                  rating={g.rating}
                  name={g.name}
                  image={g.image}
                  genres={g.genres}
                />
              </NavLink>
            ))
        ) : (
          <div className="loading_cards">
            <img src={loading} />
          </div>
        )}
      </div>
    </CardsContainer>
  );
}

export default Cards;

const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 8rem;
  color: aliceblue;
  justify-content: center;
  .active {
    text-decoration: none;
  }
  .cards {
    display: flex;
    width: 80%;
    /* margin: 0 12.6rem; */
    justify-content: start;
    gap: 2rem;
    align-items: center;
    padding-bottom: 3rem;
    border-radius: 3px;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      padding: 1.1rem;
      justify-content: center;
    }
  }
  .loading_cards {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: flex-start;
  }
`;
