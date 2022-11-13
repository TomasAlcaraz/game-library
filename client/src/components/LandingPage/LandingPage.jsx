import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Cards from "../Cards/Cards.jsx";
import Card from "../Card/Card.jsx";
import search_icon from "./search_icon.svg";

export default function LandingPage() {
  return (
    <>
      <LandingPageContainer>
        <div className="landing_page">
          <div className="area">
            <div className="search_input">
              <img src={search_icon}></img>
              <input placeholder="search"></input>
            </div>
            <form>
              <select className="favoriteOnly">
                <option>accion</option>
                <option>shooter</option>
                <option>moba</option>
                <option>mmo</option>
                <option>open world</option>
                <option>aventure</option>
              </select>
              <select className="favoriteOnly" id="favoriteOnly">
                <option>accion</option>
                <option>shooter</option>
                <option>moba</option>
                <option>mmo</option>
                <option>open world</option>
                <option>aventure</option>
              </select>
              <select className="favoriteOnly" id="favoriteOnly">
                <option>accion</option>
                <option>shooter</option>
                <option>moba</option>
                <option>mmo</option>
                <option>open world</option>
                <option>aventure</option>
              </select>
            </form>
            <button>Add Game</button>
          </div>
          <div className="content">
            <Cards>
              <Card>
                <p>Game</p>
              </Card>
            </Cards>
          </div>
        </div>
      </LandingPageContainer>
    </>
  );
}

const LandingPageContainer = styled.nav`
  .search_input {
    display: flex;
    height: 2.8rem;
    width: 18rem;
    align-items: center;
    border-radius: 150px 150px 150px 150px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
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
      background-color: #077dbcf3;
    }
  }
  .landing_page {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 4rem;
    h2 {
      color: white;
      left: 2rem;
    }
    .content {
      color: white;
    }
    .area {
      display: flex;
      flex-wrap: wrap;
      display: flex;
      flex-direction: row;
      margin-top: 8rem;
      gap: 3rem;
      justify-content: center;
      align-items: center;
      button {
        height: 3rem;
        width: 12rem;
        border: none;
        background-color: #1c3763;
        border-radius: 10px;
        color: white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
        transition: all 0.5s ease;
        &:hover {
          transition: 0.4s;
          width: 13rem;
          opacity: 100%;
          border: none;
          background-color: #077dbcf3;
        }
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
