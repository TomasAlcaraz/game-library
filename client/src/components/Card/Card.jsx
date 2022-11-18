import React from "react";
import styled from "styled-components";
// import NotFound from "../NotFound/NotFound.jsx";

function Card({ name, image, genres, rating }) {
  return (
    <CardContainer>
      <img src={image}></img>
      <div className="content">
        <div className="genres">
          {genres.map((g) => {
            return <span>{g}, </span>;
          })}
        </div>
        <h3>{name}</h3>
        <div className="rating">{rating}</div>
      </div>
    </CardContainer>
  );
}

export default Card;

const CardContainer = styled.nav`
  @import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@1,200&display=swap");
  display: flex;
  flex-direction: column;
  background-color: #131c2a;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  /* margin-top: 3rem; */
  transition: all 0.5s ease;
  &:hover {
    margin-top: -3rem;
    cursor: pointer;
  }
  img {
    width: 350px;
    aspect-ratio: auto 360 / 210;
    height: 200px;
    border-top-left-radius: 3px 3px;
    border-top-right-radius: 3px 3px;
  }
  .content {
    display: flex;
    padding: 10px;
    height: 8rem;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    background-color: #131c2a;
    font-family: "Rubik", sans-serif;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    h3 {
      color: #d4e3e8;
    }
    .genres {
      span {
        font-size: 1.13rem;
      }
      color: #10a8adeb;
      font-family: "Barlow Condensed", sans-serif;
    }
    .rating {
      font-family: "Russo One", sans-serif;
      color: #a8a8a1;
      font-size: 0.9rem;
      margin-left: 16.5rem;
    }
  }
`;
