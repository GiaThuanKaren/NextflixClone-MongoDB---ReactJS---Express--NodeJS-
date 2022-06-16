import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as IconSolid from "@fortawesome/free-solid-svg-icons";
import * as IconBrand from "@fortawesome/free-brands-svg-icons";

import { useEffect, useState } from "react";
import { ImageOption } from "../../Api/ApiConfig";
import "../../grid.css";
import MovieItem from "../MoveItem/MovieItem";
import "./ListMovieRow.css";

const ModalOverview = function ({ items, setClosingFunc }) {
  console.log("Items On Modal ", items);
  return (
    <>
      <div className="ModalOverview-Container">
        <div className="ModalOverview-Body">
          <FontAwesomeIcon
            // onClick={setClosingFunc}
            className="Icon-close-ModalOverview"
            icon={IconSolid.faTimes}
          />
          <div className="ModalOverview-Image">
            <img
              width="100%"
              height="10%"
              src={items.backdrop_path?  ImageOption.original + items.backdrop_path : 'https://taxreform.dof.gov.ph/wp-content/uploads/2019/07/no-thumbnail-medium.png'}
            />
          </div>
          <div className="ModalOverview-Contend">
            <h1>{items.name || items.original_name || items.original_title || items.tittle}</h1>
            <div style={{display: 'flex'}}>
              <p>Khớp 88%</p>
              <p>2022</p>
              <p>18+</p>
              <p>1g 23p</p>
              <p> 5.1</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
function ListMovieRow({ LinkFetch, Tittle, CurRecent, size }) {
  // if (CurRecent) console.log("View Recent Log ", CurRecent.length, LinkFetch);
  const [close, SetClose] = useState({
    isClose: false,
    item: {},
  });
  const [properties, SetProperties] = useState(() => {
    let tmp = [];
    if (LinkFetch == undefined) tmp = CurRecent;
    else tmp = [];
    return {
      MaxPage: 1,
      curPage: 1,
      ArrCur: tmp,
      Type: "",
    };
  });
  
    useEffect(() => {
      if (LinkFetch) {
        async function Fetch() {
          let res = await fetch(LinkFetch);
          let data = await res.json();
          let st1 = LinkFetch.includes("/movie");
          let st2 = LinkFetch.includes("/tv");
          let tmp;
          if (st1) tmp = "movie";
          else tmp = "tv";
          if (!st1 && !st2) tmp = "movie";
          //   console.log(tmp, st1, st2, LinkFetch);
          SetProperties({
            ...properties,
            MaxPage: data.total_pages,
            ArrCur: data.results,
            Type: tmp,
          });
        }
        Fetch();
      }
    }, []);
  
  return (
    <>
      <div className="Main-Container-ListMovie">
        
        <h3 className="ListMovie-Tittle">{Tittle}</h3>
        {properties.ArrCur.length == 0 ? (
          ""
        ) : (
          <div className="Main-ListMovie row">
            {LinkFetch == undefined
              ? CurRecent.map(function (item, idx) {
                  console.log("Item Recent ", item);
                  return (
                    <MovieItem key={idx} item={item} Type={item.Type} size={size}/>
                  );
                })
              : properties.ArrCur.map(function (item, idx) {
                  return (
                    <MovieItem
                      size={size}
                      key={idx}
                      item={item}
                      Type={properties.Type}
                      func={SetClose}
                    />
                  );
                })}
          </div>
        )}
      </div>
    </>
  );
}
export default ListMovieRow;
