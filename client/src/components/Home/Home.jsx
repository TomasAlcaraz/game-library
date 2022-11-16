import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cards from "../Cards/Cards.jsx";
import search_icon from "./search_icon.svg";
import { useSelector } from "react-redux";

export default function Home() {
  const [pages, setPages] = useState(0);
  const allGames = useSelector((state) => state.Games);
  const numPages = Math.round(allGames.length / 15);
  // Paginado escalable por la cantidad de juegos
  function paging(num) {
    const arrPages = [];
    for (let i = num; i > 0; i--) {
      arrPages.unshift(i);
    }
    return arrPages;
  }
  return (
    <HomeContainer>
      <div className="home">
        <div className="area">
          <div className="search_input">
            <img src={search_icon}></img>
            <input placeholder="search"></input>
          </div>
          <form>
            <select className="favoriteOnly" placeholder="genres">
              <option hidden value="Select">
                genres
              </option>
              <option>all</option>
              <option>accion</option>
              <option>shooter</option>
              <option>moba</option>
              <option>mmo</option>
              <option>open world</option>
              <option>aventure</option>
            </select>
            <select className="favoriteOnly">
              <option hidden value="Select">
                alphabet
              </option>
              <option>all</option>
              <option>A-Z</option>
              <option>Z-A</option>
            </select>
            <select className="favoriteOnly">
              <option>accion</option>
              <option>shooter</option>
              <option>moba</option>
              <option>mmo</option>
              <option>open world</option>
              <option>aventure</option>
            </select>
          </form>
          <div className="">
            {paging(numPages).map((p, i) => (
              <button
                key={i}
                onClick={() => {
                  setPages(i * 15);
                }}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
        <div className="content">
          <Cards pages={pages} />
        </div>
      </div>
    </HomeContainer>
  );
}

const HomeContainer = styled.nav`
  .search_input {
    display: flex;
    height: 2.8rem;
    width: 18rem;
    align-items: center;
    border-radius: 150px 150px 150px 150px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    background-color: #1c3763;
    transition: all 0.6s ease;
    &:hover {
      transition: 0.4s;
      height: 3rem;
      width: 18.5rem;
      border: none;
    }
    img {
      margin-left: 0.8rem;
      margin-right: 0.8rem;
      width: 1.5rem;
    }
  }
  .favoriteOnly {
    margin-left: 1rem;
    height: 2.7rem;
    background: #1c3763;
    border-radius: 2px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
    color: white;
    transition: all 0.5s ease;
    &:hover {
      transition: 0.8s;
      background-color: #0992dcf3;
    }
    span {
      color: white;
    }
  }
  .home {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 4rem;
    h2 {
      color: white;
      left: 2rem;
    }
    .content {
      display: flex;
      justify-content: center;
      color: white;
    }
    .area {
      display: flex;
      flex-wrap: wrap;
      display: flex;
      flex-direction: row;
      margin-top: 8rem;
      height: 7rem;
      gap: 3rem;
      justify-content: center;
      align-items: center;
      @media (max-width: 768px) {
        margin-bottom: 4.5rem;
      }
      h3 {
        color: white;
      }
      input {
        height: 1.7rem;
        width: 14rem;
        border: none;
        outline: none;
        background-color: #1c3763;
        border-radius: 5px;
        color: white;
        transition: all 0.6s ease;
      }
    }
  }
`;
