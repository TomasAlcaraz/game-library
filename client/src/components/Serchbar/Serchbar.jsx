import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import search_icon from "./search_icon.svg";
import { getSearchedGames, searchByName } from "../../redux/actions";

export default function Serchbar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const filters = useSelector((state) => state.Filters);
  function handleInputOnChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    if (filters.length) {
      dispatch(getSearchedGames(name));
      // setName("");
    } else {
      dispatch(searchByName(name));
      // setName("");
    }
  }

  function handleOnKeyPress(e) {
    if (e.key === "Enter") {
      handleOnSubmit(e);
    }
  }

  return (
    <SerchContainer>
      <div className="search_input">
        <input
          type="text"
          onChange={(e) => handleInputOnChange(e)}
          onKeyPress={(e) => handleOnKeyPress(e)}
          className="search_text"
        ></input>
        <img
          src={search_icon}
          onClick={(e) => handleOnSubmit(e)}
          className="search_icon"
          alt="search_icon"
        ></img>
      </div>
    </SerchContainer>
  );
}

const SerchContainer = styled.div`
  .search_input {
    display: flex;
    height: 2.8rem;
    width: 18rem;
    align-items: center;
    border-radius: 150px 150px 150px 150px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    background-color: #4e637b;
    transition: all 0.6s ease;
    &:hover {
      transition: 0.4s;
      height: 3rem;
      width: 18.5rem;
      border: none;
    }
    .search_icon {
      margin-left: 1rem;
      margin-right: 1rem;
      width: 1.5rem;
      &:hover {
        cursor: pointer;
      }
    }
    .search_text {
      margin-left: 0.8rem;
      height: 1.7rem;
      width: 17rem;
      border: none;
      outline: none;
      background-color: #4e637b;
      border-radius: 5px;
      color: white;
      transition: all 0.6s ease;
    }
  }
  @media (max-width: 768px) {
    margin-top: -1.8rem;
  }
`;
