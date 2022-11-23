import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { filterBy, orderBy, getAllGames } from "../../redux/actions";
import restart from "./icons-reset.png";

export default function Filters() {
  const dispatch = useDispatch();
  const [state, setState] = useState();
  const [order, setOrder] = useState();
  const genres = useSelector((state) => state.Genres);
  useEffect(() => {
    if (state === "restart") {
      dispatch(getAllGames());
    }
    if (order === "genres" || order === "genres") {
      dispatch(filterBy(order, state));
    }
    if (order === "aphabeticaly" || order === "rating") {
      dispatch(orderBy(order, state));
    }
  }, [state]);
  return (
    <FiltersContainer>
      <form className="form_filters">
        <select
          className="select"
          onClick={() => setOrder("genres")}
          onChange={(e) => setState(e.target.value)}
        >
          <option hidden>genres</option>
          {genres.length &&
            genres.map((g) => {
              return (
                <option key={g.key} value={g.name}>
                  {g.name}
                </option>
              );
            })}
        </select>
        <select
          className="select"
          onClick={() => setOrder("genres")}
          onChange={(e) => setState(e.target.value)}
        >
          <option hidden>origin</option>
          <option value="db">DB(ADDED)</option>
          <option calue="api">API(EXISTENT)</option>
        </select>
        <select
          className="select"
          onClick={() => setOrder("rating")}
          onChange={(e) => setState(e.target.value)}
        >
          <option hidden>rating</option>
          <option value="highest">highest</option>
          <option value="lowest">lowest</option>
        </select>
        <select
          className="select"
          onClick={() => setOrder("aphabeticaly")}
          onChange={(e) => setState(e.target.value)}
        >
          <option hidden>aphabeticaly</option>
          <option value="AZ">A-Z</option>
          <option value="ZA">Z-A</option>
        </select>
      </form>
      <div>
        <img
          src={restart}
          alt="restart"
          className="restart"
          onClick={() => setState("restart")}
        />
      </div>
    </FiltersContainer>
  );
}

const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  .form_filters {
    display: flex;
    width: 12rem;
    height: 10rem;
    gap: 5px;
    flex-direction: column;
  }
  .select {
    outline: none;
    height: 2rem;
    background-color: #182132;
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
  .restart {
    padding-top: 0.4rem;
    margin-left: 2rem;
    width: 1.1rem;
    cursor: pointer;
  }
`;
