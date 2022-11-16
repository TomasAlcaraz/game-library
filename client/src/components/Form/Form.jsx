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
        <input type='text' placeholder='Name...' />
        <p>Description:</p>
        <input type='text' placeholder='Description...' />
        <p>Realeased:</p>
        <input type='date' />
        <p>Rating:</p>
        <input type='number' />
        <p>Platforms:</p>
        <textarea/>
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
  justify-content: center;
  form {
    width: 70%;
    padding: 2rem;
    flex-direction: column;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  
  textarea {
    width: 30vw;
  }
  @media (max-width: 768px) {
    textarea {
      width: 200px;
    }
  }
  .genres {
    margin-top: 2rem;
    width:50%;
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
  }
`;
