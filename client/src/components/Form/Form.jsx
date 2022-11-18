import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function Form() {
  const [localGenres, setLocalGenres] = React.useState([]);
  const genres = useSelector((state) => state.Genres);
  return (
    <StyledForm>
      <form>
        <p>Name:</p>
        <input type='text' />
        <p>Description:</p>
        <input type='text' />
        <p>Realeased:</p>
        <input type='date' />
        <p>Rating:</p>
        <input type='number' />
        <p>Platforms:</p>
        <textarea/>
        <p>Genres:</p>
        <div className="genres">
          {genres.map((g) => (
            <button
              key={g.id}
              onClick={() => {
                setLocalGenres([...localGenres, g.id]);
              }}>{g.name}</button>
          ))}
        </div>
      </form>
    </StyledForm>
  );
}

const StyledForm = styled.div`
  display: flex;
  width: 100%;
  height: 85%;
  justify-content: center;
  align-items: center;
  form {
    width: 70%;
    padding: 2rem;
    flex-direction: column;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  p {
    color: #dfe9e0;
    font-family: "Rubik", sans-serif;
  }
  input {
    background-color: #395b67;
    border: none;
    border-radius: 3px;
    height: 1.5rem;
    color: #dfe9e0;
    outline: none;
  }
  textarea {
    width: 30vw;
    height: 4rem;
    background-color: #395b67;
    border: none;
    color: white;
    outline: none;
    font-size: 0.9rem;
  }
  @media (max-width: 768px) {
    textarea {
      width: 200px;
    }
  }
  .genres {
    width:50%;
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    button {
      border: none;
      background-color: #186a3c;
      color: #d2dfd4;
      padding: 7px;
      border-radius: 5px;
      transition: all 0.2s ease;
      &:hover {
        background-color: #1bae5a;
      }
      &:active {
        &:disabled {
          background-color: #395b67;
        }
      }
    }
  }
`;
