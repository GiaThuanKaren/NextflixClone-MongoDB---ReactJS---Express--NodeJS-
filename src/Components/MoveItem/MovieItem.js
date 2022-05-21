import { ImageOption } from "../../Api/ApiConfig";
import "../../grid.css";

import "./MovieItem.css";
import {
  FontAwesomeIcon,
  FontAwesomeIcont,
} from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { SETCURFILM, SETVIEWRECENTLY } from "../../Redux/Actions/Actions";
import { Link, useNavigate } from "react-router-dom";
import {
  AddNewIntoCollection,
  ColrefMyList,
  ColrefViewRecently,
  MainDB,
} from "../../FireBase/Firebase-Config";
import { SetViewRecently } from "../../Api/CommonFunctionAndVar";

const ModalOveView=function(){

  return(
    <>
    <div className="ModalOverView">
    <h1>Modal Overview</h1>
    </div>
    </>
  )
}


function MovieItem({ item, size, Type,func }) {
  const GlobalState = useSelector((state) => state);
  //   console.log(GlobalState)
  const dispath = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          if (!GlobalState.isLogin) {
            alert("Vui Lòng Đăng Nhập");
            func({
              item:item,
              isClose:true
            });
            return;
          }else SetViewRecently(item);
          navigate(`/Detail?id=${item.id}&type=${Type}`);
        }}
        className={`MovieItem col l-2 m-3 c-6 ${size} ${Type}`}
      >
        {/* <ModalOveView/> */}
        <div className="Overlay-MovieTiem">
          <FontAwesomeIcon className="Icon-Play" icon={faPlayCircle} />
        </div>
        <img
          className="MovieItem-img "
          src={`${ImageOption.w500}${item.poster_path}`}
        />
      </div>
    </>
  );
}

export default MovieItem;
