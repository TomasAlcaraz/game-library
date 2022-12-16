import React from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card.jsx";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import loading from "./loading.gif";
import NotFound from "../NotFound/NotFound.jsx";
import { useState } from "react";

function Cards() {
  const games = useSelector((state) => state.Games);
  const filters = useSelector((state) => state.Filters);
  const page = useSelector((state) => state.Page);
  const [found, setFound] = useState(true);
  setTimeout(() => {
    setFound(false);
  }, 5000);
  function selection() {
    // setFound(true);
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
            .slice(page, page + 15)
            .map((g, i) => (
              <NavLink to={`/videogame/${g.id}`} className="active">
                <Card
                  key={i}
                  rating={g.rating}
                  name={g.name}
                  image={g.image}
                  genres={g.genres}
                />
              </NavLink>
            ))
        ) : found ? (
          <div className="loading_cards">
            <img src={loading} alt="loading" />
          </div>
        ) : (
          <NotFound />
        )}
      </div>
    </CardsContainer>
  );
}

export default Cards;

const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 8rem;
  color: aliceblue;
  justify-content: center;
  @media (max-width: 768px) {
    margin-top: 10rem;
  }
  .active {
    text-decoration: none;
  }
  .cards {
    display: flex;
    width: 80%;
    justify-content: start;
    gap: 2rem;
    align-items: center;
    padding-bottom: 1rem;
    border-radius: 3px;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      padding: 0.5rem;
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
