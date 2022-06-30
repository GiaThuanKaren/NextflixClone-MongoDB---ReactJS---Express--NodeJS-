import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import { combineReducers } from "redux";
import { Base_Url, FetchOption, ImageOption } from "../../Api/ApiConfig";
import Footer from "../../Components/Footer/Footer";
import { NavBar } from "../../Components/Header/Header";
import "../../grid.css";
import "./Detail.css";

import MovieItem from "../../Components/MoveItem/MovieItem";
import {
  AddNewIntoCollection,
  ColrefMyList,
} from "../../FireBase/Firebase-Config";
import { addDoc } from "firebase/firestore";
import NotFound from "../../Components/NotFound/NotFound";

const CastItem = function ({ item }) {
  return (
    <>
      <div className="CastItem l-2 m-3 c-3">
        <div className="CastItem-image">
          <img src={`${ImageOption.w500}${item.profile_path}`} />
        </div>
        <h3>{item.name}</h3>
      </div>
    </>
  );
};
const Detail = function () {
  const EleRef = useRef();
  const [loading, SetLoading] = useState(false);
  const params = new URLSearchParams(location.search).get("id");
  const Type = new URLSearchParams(location.search).get("type");
  const FetchFuncs = FetchOption.FuncFetchParam;
  const [properties, Setproperties] = useState({
    DetailMovie: {},
    MovieKeyTrailer: [],
    Moviecredit: [],
    MovieSimilar: [],
    IsLoading: true,
    IsFetchSuccess: false,
  });

  useEffect(() => {
    Promise.all([
      fetch(`${Base_Url}${FetchFuncs.FetchDetail(params, Type)}`),
      fetch(`${Base_Url}${FetchFuncs.FetchGetMovie(params, Type)}`),
      fetch(`${Base_Url}${FetchFuncs.FetchCredit(params, Type)}`),
      fetch(`${Base_Url}${FetchFuncs.FetchGetSimialarMovie(params, Type)}`),
    ])
      .then(function (responses) {
        return Promise.all(
          responses.map(function (response) {
            return response.json();
          })
        );
      })
      .then(function (data) {
        console.log(data);
        if (data[0].status_code != 34) {
          Setproperties({
            DetailMovie: data[0],
            MovieKeyTrailer: data[1].results,
            Moviecredit: data[2].cast,
            MovieSimilar: data[3].results,
            IsLoading: false,
            IsFetchSuccess: true,
          });
        } else {
          Setproperties({
            DetailMovie: {},
            MovieKeyTrailer: [],
            Moviecredit: [],
            MovieSimilar: [],
            IsLoading: false,
            IsFetchSuccess: false,
          });
        }
        // SetLoading(false);
      })
      .catch(function (error) {
        console.log(error, "Cannot Fetch , Please Referesh Your Page");
      });
  }, [params]);
  const { DetailMovie, MovieKeyTrailer, MovieSimilar, Moviecredit } =
    properties;
  // console.log(DetailMovie,MovieKeyTrailer,MovieSimilar,Moviecredit)
  // console.log("-----------",Detail)
  // console.log(properties);

  return (
    <>
      {properties.IsLoading == false ? (
        MovieKeyTrailer.length != 0 ? (
          <>
            <div ref={EleRef} className={`Main-Container-Detail-Movie grid `}>
              <NavBar />
              <div className="Banner-Movie">
                <div className="Image-OverLay"></div>
                <img
                  src={`${ImageOption.original}${DetailMovie.backdrop_path}`}
                />

                <div className="Movie-detail-contend">
                  <div className="Movie-poster">
                    <FontAwesomeIcon
                      onClick={() => {
                        // addDoc(ColrefMyList, {
                        //   Film: JSON.stringify(DetailMovie),
                        //   Type: JSON.stringify(Type),
                        // });
                      }}
                      className="Heart-Icon"
                      icon={faHeart}
                    />
                    <img
                      src={`${ImageOption.w500}${DetailMovie.poster_path}`}
                    />
                  </div>
                  <div className="Movie-info">
                    <h3>{DetailMovie.name || DetailMovie.original_title}</h3>
                    <p>{DetailMovie.overview}</p>
                    <ul className="Movie-geners-list">
                      {DetailMovie.genres.map(function (item, idx) {
                        return (
                          <li
                            key={idx}
                            className="Movie-geners-item primary-btn"
                          >
                            {item.name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <h3 style={{ color: "#fff" }}>
                Trailer {DetailMovie.name || DetailMovie.original_title}
              </h3>
              <div className="Movie-trailer-list">
                {MovieKeyTrailer.map(function (item, idx) {
                  console.log(item);
                  return (
                    <>
                      <iframe
                        allowFullScreen
                        src={`https://youtube.com/embed/${item.key}`}
                        className="Movie-Trailer"
                      />
                    </>
                  );
                })}
              </div>
              <h3 style={{ color: "#fff" }}>
                Movie {DetailMovie.name || DetailMovie.original_title}
              </h3>
              {/* https://www.2embed.ru/embed/tmdb/movie?id=${DetailMovie.id} */}
              <div className="row Section-Watch-Film">
                <iframe
                  className="iframvideo col l-9"
                  allowFullScreen
                  src={`https://2embed.org/embed/${DetailMovie.id}`}
                />
                <div className="col l-2 Movie-Simimlar row">
                {MovieSimilar.length != 0
                  ? MovieSimilar.map(function (item, idx) {
                      return (
                        <React.Fragment>
                          <MovieItem
                            item={item}
                            key={idx}
                            Type={Type}
                            size="small"
                          />
                        </React.Fragment>
                      );
                    })
                  : "hi not found"}
              </div>
              </div>
              {/* <h3>Credits</h3>
              <div className="Cast-Movie row">
                {Moviecredit.map(function (item, idx) {
                  if (item.profile_path)
                    return <CastItem key={idx} item={item} />;
                })}
              </div> */}

              <h3>Movie Simimlar</h3>
              {/* <div className="Movie-Simimlar row">
                {MovieSimilar.length != 0
                  ? MovieSimilar.map(function (item, idx) {
                      return (
                        <React.Fragment>
                          <MovieItem
                            item={item}
                            key={idx}
                            Type={Type}
                            size="small"
                          />
                        </React.Fragment>
                      );
                    })
                  : "hi not found"}
              </div> */}
              <Footer />
            </div>
          </>
        ) : (
          <>
            <NavBar />
            <NotFound />
            <Footer />
          </>
        )
      ) : (
        <>
          <div className="center">
            <div className=" loadingio-spinner-double-ring-t4pzllruwfe">
              <div className="ldio-aqtjlj40clo">
                <div></div>
                <div></div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
