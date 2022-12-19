import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addGame, getAllGames } from "../../redux/actions";
import { useHistory } from "react-router-dom";

export default function Form() {
  const history = useHistory();
  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    rating: 0,
    image: "",
    platforms: [],
    genres: [],
  });
  const genres = useSelector((state) => state.Genres);
  const handleSelector = (type, selection) => {
    if (type === "genres") {
      if (!input.genres.includes(selection) && input.genres.length <= 3) {
        setInput({ ...input, genres: [...input.genres, selection] });
      }
    }
    if (type === "platforms") {
      if (!input.platforms.includes(selection) && input.platforms.length <= 5) {
        setInput({ ...input, platforms: [...input.platforms, selection] });
      }
    }
  };
  const errMessage = validate(input.name, input.description);
  function validate(name, description) {
    if (name.length > 30) {
      return "the name is too long";
    }
    if (name.length < 1) {
      return "name must have at least one character";
    }
    if (description.length < 40) {
      return "the description must have at least 50 characters";
    }
    return "";
  }
  // add game
  const dispatch = useDispatch();
  async function handleSubmit(e) {
    e.preventDefault();

    if (validate(input.name, input.description) === "") {
      dispatch(addGame(input));
      dispatch(getAllGames());
      history.push("/home");
    }
  }
  return (
    <StyledForm>
      <form
        className="form_add_game"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        
          <h4>Name:</h4>
          <input
            type="text"
            value={input.name}
            onChange={(e) => setInput({ ...input, name: e.target.value })}
            required
          />
          <h4>Description:</h4>
          <textarea
            className="form_description"
            type="text"
            value={input.description}
            onChange={(e) =>
              setInput({ ...input, description: e.target.value })
            }
            required
          />

        <h4>Rating:</h4>
        <input
          type="number"
          step="any"
          value={input.rating}
          onChange={(e) => setInput({ ...input, rating: e.target.value })}
          required
        />
        <h4>Realeased:</h4>
        <input
          type="date"
          value={input.released}
          onChange={(e) => setInput({ ...input, released: e.target.value })}
          required
        />
        <h4>Platforms:</h4>
        <select
          className="form_select"
          value={input.released}
          onChange={(e) => {
            e.preventDefault();
            handleSelector("platforms", e.target.value);
          }}
        >
          <option hidden>select</option>
          <option value="PC">PC</option>
          <option value="PlayStation 5">PlayStation 5</option>
          <option value="PlayStation 4">PlayStation 4</option>
          <option value="Xbox One">Xbox One</option>
          <option value="iOS">iOS</option>
          <option value="Android">Android</option>
          <option value="Nintendo Switch">Nintendo Switch</option>
          <option value="Nintendo DS">Nintendo DS</option>
          <option value="Xbox 360">Xbox 360</option>
          <option value="Playstation 3">Playstation 3</option>
          <option value="Nintendo DSi">Nintendo DSi</option>
          <option value="macOS">macOS</option>
          <option value="Nintendo 64">Nintendo 64</option>
          <option value="Game Boy">Game Boy</option>
          <option value="Game Cube">GameCube</option>
          <option value="Wii U">Wii U</option>
        </select>
        <div className="markeds">
          {input.platforms.map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
        <h4>Genres:</h4>
        <select
          className="form_select"
          onChange={(e) => {
            e.preventDefault();
            handleSelector("genres", e.target.value);
          }}
        >
          <option hidden value="selected">
            select
          </option>
          {genres.map((g, i) => (
            <option value={g.name} key={i}>
              {g.name}
            </option>
          ))}
        </select>
        <div className="markeds">
          {input.genres.map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
        <h4>Image: </h4>
        <input
          type="text"
          value={input.image}
          onChange={(e) => setInput({ ...input, image: e.target.value })}
          required
        />
        <span className="err_message">{errMessage}</span>
        <div className="add">
          <button onClick={(e) => handleSubmit(e)}>ADD GAME</button>
        </div>
      </form>
    </StyledForm>
  );
}

const StyledForm = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  .form_description {
    width: 18rem;
    height: 20rem;
    background-color: #395b67;
    border: none;
    border-radius: 3px;
    color: #dfe9e0;
    outline: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

  .form_add_game {
    margin-top: 5rem;
    border-top: #0a7196 solid 7px;
    width: 50rem;
    padding-bottom: 1.2rem;
    flex-direction: column;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #0d131b;
    @media (max-width: 768px) {
      width: 23rem;
    }
    input {
      background-color: #395b67;
      border: none;
      border-radius: 3px;
      height: 1.7rem;
      color: #dfe9e0;
      outline: none;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
    h4 {
      color: #dfe9e0;
      font-family: "Rubik", sans-serif;
    }
  }
  .form_select {
    width: 40%;
    display: flex;
    justify-content: center;
    gap: 5px;
    height: 2.5rem;
    background-color: #18547e;
    border: none;
    color: #d2dfd4;
    border-radius: 1rem;
    outline: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    transition: all 0.2s ease;
    &:hover {
      background-color: #1575ba;
    }
  }
  .markeds {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-top: 0.3rem;
    span {
      background: #0e91c0;
      color: #eef2f3;
      padding: 7px;
      border-radius: 0.6rem;
    }
  }
  .add {
    padding-top: 1rem;
    button {
      font-family: "Barlow Condensed", sans-serif;
      font-size: 1.2rem;
      width: 15rem;
      height: 3rem;
      background-color: #149a53;
      color: #d2dfd4;
      border: none;
      outline: none;
      border-radius: 10px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      transition: all 0.2s ease;
      &:hover {
        width: 15.5rem;
        height: 3.3rem;
        background-color: #16b761;
        cursor: pointer;
      }
    }
  }
  .err_message {
    padding-top: 1rem;
    font-family: "Rubik", sans-serif;
    font-size: 1rem;
    color: #b11719;
    width: 18rem;
  }
`;
