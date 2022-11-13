import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NotFound from "../NotFound/NotFound.jsx";

function Card(game) {
  return (
    <>
      <CardContainer>
        <div className="card">
          <Link to={`/videogames/${game.id}`}>
            {!game.image ? (
              <NotFound image={"noimage"} />
            ) : (
              <img className="img" src={game.image} alt={game.name} />
            )}
          </Link>
          <div className="content">
            <div className="name">{game.name}</div>
            <div className="genres">{game.genres}</div>
          </div>
          <div className="contentRating">
            <div className="rating">{game.rating}</div>
          </div>
        </div>
      </CardContainer>
    </>
  );
}

export default Card;

const CardContainer = styled.nav`
  width: 20rem;
  height: 25rem;
  border: #008B7A solid;
`;
