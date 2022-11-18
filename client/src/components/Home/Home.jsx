import React, { useState } from "react";
import styled from "styled-components";
import Cards from "../Cards/Cards.jsx";
import search_icon from "./search_icon.svg";
import { useSelector } from "react-redux";

export default function Home() {
  // Paginado escalable por la cantidad de juegos
  const [pages, setPages] = useState(0);
  const allGames = useSelector((state) => state.Games);
  const numPages = Math.round(allGames.length / 15);
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
          <div className="search_input">
            <img src={search_icon}></img>
            <input></input>
          </div>
          <div className="pages">
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
  @import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");
  .search_input {
    display: flex;
    height: 2.8rem;
    width: 18rem;
    align-items: center;
    border-radius: 150px 150px 150px 150px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    background-color: #607493;
    transition: all 0.6s ease;
    &:hover {
      transition: 0.4s;
      height: 3rem;
      width: 18.5rem;
      border: none;
    }
    input {
      height: 1.7rem;
      width: 14rem;
      border: none;
      outline: none;
      background-color: #607493;
      border-radius: 5px;
      color: white;
      transition: all 0.6s ease;
    }
    img {
      margin-left: 0.8rem;
      margin-right: 0.8rem;
      width: 1.5rem;
    }
  }
  .favoriteOnly {
    margin-left: 1rem;
    height: 2rem;
    background: #0d141e;
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
      justify-content: space-around;
      align-items: center;
      @media (max-width: 768px) {
        margin-bottom: 5rem;
      }
      form {
        display: flex;
        gap: 10px;
        flex-direction: column;
      }
      h3 {
        color: white;
      }
      .pages {
        display: flex;
        align-items: flex-end;
        width: 11rem;
        height: 1.4rem;
        gap: 4px;
        background-color: #0d141e;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
          rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
          rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        padding: 0.8rem;
        border-radius: 3px;
        button {
          border: none;
          outline: none;
          background: none;
          color: white;
          font-size: 1rem;
          font-family: "Russo One", sans-serif;
          &:hover {
            color: #158ad8;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
