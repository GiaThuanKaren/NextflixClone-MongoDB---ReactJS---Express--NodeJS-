import { ImageOption } from "../../Api/ApiConfig";
import '../../grid.css'

import './MovieItem.css'
import {FontAwesomeIcon, FontAwesomeIcont} from '@fortawesome/react-fontawesome'
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons'
import {useSelector,useDispatch} from 'react-redux'
import { SETCURFILM } from "../../Redux/Actions/Actions";
import { Link, useNavigate } from "react-router-dom";
import { AddNewIntoCollection, ColrefMyList,ColrefViewRecently, MainDB } from "../../FireBase/Firebase-Config";
function MovieItem({item,size,Type}){
    const dispath=useDispatch();
    const navigate=useNavigate();
    return (
        <>
        <div
            onClick={()=>{
                    dispath(SETCURFILM(item));
                    // AddNewIntoCollection(ColrefViewRecently,{
                    //     Film:JSON.stringify(item)
                    // })
                    // <Link to={`/Detail?id=${item.id}&type=${Type}`}></Link>
                    navigate(`/Detail?id=${item.id}&type=${Type}`)
            }}
            className={`MovieItem col l-2 m-3 c-6 ${size} ${Type}`}>
            <div className="Overlay-MovieTiem">
                <FontAwesomeIcon className="Icon-Play" icon={faPlayCircle} />
            </div>
            <img 
                className="MovieItem-img "
                src={`${ImageOption.w500}${item.poster_path}`}
            />
        </div>
        </>
    )
}

export default MovieItem;