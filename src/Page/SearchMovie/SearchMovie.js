import { useEffect, useState, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { Base_Url, ApiKey } from "../../Api/ApiConfig";
import Footer from "../../Components/Footer/Footer";
import { NavBar } from "../../Components/Header/Header";
import MovieItem from "../../Components/MoveItem/MovieItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "../../grid.css";
import "./SearchMovie.css";

function SearchMovie() {
  const params = new URLSearchParams(location.search).get("query");
  const CurState = useSelector((state) => state);
  const [Curpage, SetCurPage] = useState(1);
  const [properties, Setproperties] = useState({
    MaxPage: 1,
    CurFilm: [],
  });
  console.log(properties.CurFilm, properties.curPage);
  const HandlePage = function (event, value) {
    SetCurPage(value);
    console.log(event, value);
  };
  useEffect(() => {
    console.log("Fetching...");
    // console.log(params.get('query'),params.get('data'))
    fetch(`${Base_Url}/search/movie?${ApiKey}&query=${params}&page=${Curpage}`)
      .then((res) => res.json())
      .then(function (items) {
        console.log(items);
        let tmp = properties.curPage + 1;
        Setproperties({
          curPage: tmp,
          MaxPage: items.total_pages,
          CurFilm: [...items.results],
        });
      });
  }, [Curpage]);
  return (
    <>
      <NavBar />
      <div className="Main-contaner-Search-Page grid">
        <div className="List-Movie-Search row">
          {properties.CurFilm.map(function (item, idx) {
            if (item.poster_path)
              return <MovieItem key={idx} item={item} Type="movie" />;
          })}
        </div>
        <div style={{display:"flex","justifyContent":"center",margin:"10px"}}>
          <Stack>
            <Pagination
              count={properties.MaxPage}
              page={Curpage}
              color="secondary"
              onChange={HandlePage}
            />
          </Stack>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default SearchMovie;
