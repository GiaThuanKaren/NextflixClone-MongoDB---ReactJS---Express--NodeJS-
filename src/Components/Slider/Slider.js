import { faCodeBranch, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Base_Url, ImageOption, FetchOption } from "../../Api/ApiConfig";
import { SETCURFILM } from "../../Redux/Actions/Actions";
import "./Slide.css";
import {
  AddNewIntoCollection,
  ColrefViewRecently,
} from "../../FireBase/Firebase-Config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faVolumeMute,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { SetViewRecently } from "../../Api/CommonFunctionAndVar";

function Slider({ LinkFetch }) {
  let tmp;
  const GlobalState= useSelector(state=>state)
  const [active, SetActive] = useState(false);
  const dispath = useDispatch();
  const navigate = useNavigate();
  const [CurData, SetCurData] = useState([]);
  const EleRef = useRef();
  const TimeCur = useRef();
  const [curitem, Setcuritem] = useState({});
  const [key, setkey] = useState([]);
  const GetVolumeTrailer = function () {
    console.log("click");
    SetActive(!active);
  };
  useEffect(() => {
    let rand;

    fetch(LinkFetch)
      .then((res) => res.json())
      .then(function (items) {
        console.log(items.results);
        let st1 = LinkFetch.includes("/movie");
        let st2 = LinkFetch.includes("/tv");
        if (st1) tmp = "movie";
        else tmp = "tv";
        rand = Math.floor(Math.random() * items.results.length - 1);
        Setcuritem(items.results[rand]);
        // SetCurData(items.results);
        return items.results[rand];
      })

      .catch(function (e) {
        console.log(e, "Lỗi");
      });
  }, []);

  //   const curitem = CurData[Math.abs(rand)];
  return (
    <>
      {curitem == null ? (
        ""
      ) : (
        <>
          <div
            style={{
              backgroundImage: `url(${ImageOption.original}${curitem.backdrop_path})`,
            }}
            className="Slide-Container  "
          >
            <div className="Slide-OverLay"></div>
            <div className="Slide-contend">
              <h1 className="Slide-Movie-Name">
                {curitem.name ||
                  curitem.original_name ||
                  curitem.original_title}
              </h1>
              <div className="Slide-btns">
                <div
                  style={{ backgroundColor: "#FFFF", color: "#000000" }}
                  onClick={() => {
                    // AddNewIntoCollection(ColrefViewRecently,{
                    //     Film:JSON.stringify(curitem)
                    // })
                    if (!GlobalState.isLogin) {
                      alert("Vui Lòng Đăng Nhập");
                      
                      return;
                    }else SetViewRecently(curitem);
                    // dispath(SETCURFILM(curitem));
                    navigate(`/Detail?id=${curitem.id}&type=movie`);
                  }}
                  className="Play-Btn MyList-Btn primary-btn"
                >
                  <FontAwesomeIcon icon={faPlay} />
                  <h4>Play Now</h4>
                </div>

                <div
                  style={{ backgroundColor: "#5D5C58", color: "#FFFFFF" }}
                  onClick={() => {
                    if (!GlobalState.isLogin) {
                      alert("Vui Lòng Đăng Nhập");
                      return;
                      
                    } 

                    navigate(`/Detail?id=${curitem.id}&type=movie`);
                  }}
                  className="MyList-Btn primary-btn"
                >
                  <h4>More Info</h4>
                  <FontAwesomeIcon icon={faExclamationCircle} />
                </div>
              </div>
              <h5 className="Slide-Movie-Overview">{curitem.overview}</h5>
            </div>
            <div
              onClick={GetVolumeTrailer}
              className="btns-slider"
              style={{ color: "white" }}
            >
              {active ? (
                <FontAwesomeIcon icon={faVolumeUp} />
              ) : (
                <FontAwesomeIcon icon={faVolumeMute} />
              )}
            </div>
            {/* <FontAwesomeIcon icon=() /> */}
          </div>
        </>
      )}
    </>
  );
}

export default Slider;
