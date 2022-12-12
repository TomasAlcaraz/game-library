import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import { getDetail, clearDetail } from "../../redux/actions";
import loading from "../Cards/loading.gif";

function Detail(props) {
  const detail = useSelector((state) => state.Detail);
  const dispatch = useDispatch();
  const history = useHistory();
  function handleSubmit() {
    dispatch(clearDetail());
  }
  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  return (
    <DetailContainer>
      {detail.name ? (
        <div className="detail_body">
          <div className="detail_header">
            <NavLink to="/home" className="detail_active">
              <div
                className="image_back"
                onClick={() => {
                  history.goBack();
                  handleSubmit();
                }}
              >
                ⮨
              </div>
            </NavLink>
            <h3 className="detail_name">{detail.name}</h3>
          </div>
          <div className="detail_content">
            <div className="detail_left_content">
              <img src={detail.image} alt="detail"/>
              <div className="detail_platforms_genres">
                <div className="detail_box">
                  <h3>Platforms:</h3>
                  <div>
                    {detail.platforms &&
                      detail.platforms.map((p) => {
                        return <span>{p}, </span>;
                      })}
                  </div>
                </div>
                <div className="detail_box">
                  <h3>Genres:</h3>
                  <div>
                    {detail.genres &&
                      detail.genres.map((g) => {
                        return <span>{g}, </span>;
                      })}
                  </div>
                </div>
              </div>
            </div>
            <div className="detail_rigth_content">
              <div
                className="detail_description"
                dangerouslySetInnerHTML={{ __html: detail.description }}
              />
              <div className="released_rating">
                <p>{detail.released}</p>
                <p>{detail.rating}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="detail_loading">
          <img src={loading} alt="loading"/>
        </div>
      )}
    </DetailContainer>
  );
}

export default Detail;

const DetailContainer = styled.div`
  .detail_body {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .detail_active {
    text-decoration: none;
  }
  .detail_header {
    display: flex;
    flex-direction: row;
    width: 92%;
    gap: 5rem;
  }
  .image_back {
    justify-content: start;
    padding-top: 8rem;
    font-size: 3.5rem;
    color: #cacfea;
    transition: all 0.6s ease;
    &:hover {
      cursor: pointer;
      color: #2dbfcf;
    }
  }
  .detail_content {
    width: 80%;
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
  .detail_name {
    margin-top: 6rem;
    color: aliceblue;
    font-size: 3rem;
  }
  .detail_left_content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    background-color: #0a1522;
    img {
      width: 50rem;
      height: 30rem;
    }
  }
  .detail_rigth_content {
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    align-items: stretch;
    padding-bottom: 1rem;
    gap: 1rem;
    background-color: #0a1522;
    height: 40rem;
    .detail_description {
      color: #a2bdd6;
      height: 32rem;
      margin: 1rem;
      padding: 1.5rem;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background: #2763ac;
        border-radius: 4px;
      }
    }
  }
  .detail_platforms_genres {
    display: flex;
    gap: 4rem;
    justify-content: space-evenly;
    h3 {
      color: #d6dfe6;
      font-family: "Rubik", sans-serif;
    }
    .detail_box {
      display: flex;
      flex-direction: column;
      width: 20rem;
      color: #7e7a7a;
    }
  }
  .released_rating {
    display: flex;
    color: #879fb1;
    justify-content: space-between;
    gap: 4rem;
    padding: 0 3rem;
    font-family: "Rubik", sans-serif;
  }
  .detail_loading {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding-top: 20rem;
  }
`;
