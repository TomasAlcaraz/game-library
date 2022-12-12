import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../Cards/Cards.jsx";
import Serchbar from "../Serchbar/Serchbar.jsx";
import Filters from "../Filters/Filters.jsx";
import { clearDetail, setPage } from "../../redux/actions/index.js";

export default function Home() {
  // Paginado escalable por la cantidad de juegos
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.Games);
  const filters = useSelector((state) => state.Filters);
  const select = filters.length ? filters : allGames;
  const numPages = Math.ceil(select.length / 15);
  const page = useSelector((state) => state.Page);
  function paging(num) {
    const arrPages = [];
    for (let i = num; i > 0; i--) {
      arrPages.unshift(i);
    }
    return arrPages;
  }
  function handlePages(num) {
    dispatch(setPage(num));
  }
  useEffect(() => {
    dispatch(clearDetail());
  }, [dispatch]);
  return (
    <HomeContainer>
      <div className="home">
        <div className="area">
          <Filters />
          <Serchbar />
          <div className="page_container">
            <div className="pages">
              {paging(numPages).map((p, i) => (
                <button
                  key={i}
                  value={p}
                  onClick={(e) => {
                    handlePages(i * 15);
                  }}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
        <Cards />
      </div>
    </HomeContainer>
  );
}

const HomeContainer = styled.nav`
  @import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");
  .home {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    h2 {
      color: white;
      left: 2rem;
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
      h3 {
        color: white;
      }
      .page_container {
        display: flex;
        width: 16rem;
        justify-content: center;
      }
      .pages {
        display: flex;
        align-items: flex-end;
        overflow-x:scroll;
        scroll-behavior: smooth;
        width: 13.8rem;
        height: 2.5rem;
        gap: 4px;
        background-color: #1a2433;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
          rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
          rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        padding: 0.8rem;
        border-radius: 3px;
        &::-webkit-scrollbar {
          width: 8px;
          height: 8px;
          border-radius: 4px;
          background-color: #0c1117;
          display: ruby-base;
        }
        &::-webkit-scrollbar-thumb {
          background-color: #c4c3d6;
          border-radius: 3px;
        }
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
          &:focus {
            color: #1d95e4;
          }
        }
      }
    }
  }
`;
