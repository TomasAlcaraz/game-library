import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import BurguerButton from "../BurguerButton/BurguerButton.jsx";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllGames, getGenres } from "../../redux/actions";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const handleClick = () => {
    setClicked(!clicked);
  };
  useEffect(() => {
    dispatch(getAllGames());
    dispatch(getGenres());
  }, [dispatch]);
  return (
    location.pathname !== "/" && (
      <NavContainer>
        <NavLink to="/home" className="navbar_navlink">
          <img src={logo} className="logo" alt="logo" />
        </NavLink>
        <div className={`links ${clicked ? "active" : ""}`}>
          <NavLink to="/home" className="navbar_navlink">
            <div onClick={handleClick} className="link">
              Home
            </div>
          </NavLink>
          <NavLink to="/form" className="navbar_navlink">
            <div onClick={handleClick} className="link">
              Add Games
            </div>
          </NavLink>
        </div>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </NavContainer>
    )
  );
}

export default Navbar;

const NavContainer = styled.nav`
  @import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");
  position: fixed;
  display: flex;
  width: 100%;
  background-color: #1c273a;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  padding-right: 5rem;
  .logo {
    width: 3.4rem;
    margin: 0.5rem;
    margin-left: 2rem;
    margin-top: 10px;
  }
  .link {
    color: #acadbf;
    margin-right: 2rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    .navbar_navlink {
      text-decoration: none;
    }
    .link {
      color: #d3e2ff;
      font-size: 2rem;
      display: block;
      font-family: "Rubik", sans-serif;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      .link {
        font-size: 1.3rem;
        color: #d3e2ff;
        display: inline;
      }
      display: block;
    }
  }

  .links.active {
    @media (max-width: 768px) {
      display: flex;
      position: absolute;
      align-items: center;
      flex-direction: column;
      text-align: center;
      gap: 3rem;
      top: 100%;
      left: -2.5rem;
      right: 0;
      .link {
        font-size: 2.8rem;
        margin-top: 4.2rem;
        color: #d3e2ff;
      }
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
    @media (max-width: 768px) {
      margin-right: 1rem;
      margin-top: 6px;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #1c273a;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;
  @media (max-width: 768px) {
    &.active {
      display: flex;
      border-radius: 0 0 40% 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      margin-top: 5rem;
    }
  }
`;
