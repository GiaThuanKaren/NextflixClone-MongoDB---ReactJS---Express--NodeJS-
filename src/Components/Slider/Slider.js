import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { ImageOption } from '../../Api/ApiConfig';
import { SETCURFILM } from '../../Redux/Actions/Actions';
import './Slide.css'
import { AddNewIntoCollection, ColrefViewRecently } from '../../FireBase/Firebase-Config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
function Slider({LinkFetch}){
    let tmp;
    const dispath=useDispatch();
    const navigate=useNavigate();
    const [CurData, SetCurData]= useState([])
    const EleRef=useRef();
    const TimeCur=useRef();
    useEffect(()=>{
        fetch(LinkFetch)
            .then(res=>res.json())
            .then(function(items){
                console.log(items.results)
                let st1=LinkFetch.includes('/movie')
                let st2=LinkFetch.includes('/tv');
                
                if(st1) tmp="movie";
                else tmp="tv";
                SetCurData(items.results);
            })
            .catch(function(e){
                console.log(e,"Lỗi")
            })
    },[])
    let rand=Math.floor(Math.random()*CurData.length-1);
    const curitem=CurData[Math.abs(rand)];
    return (
    <>
        {CurData.length==0 ? '' :
        <div 
        style={{
            backgroundImage:`url(${ImageOption.original}${curitem.backdrop_path})`
        }}
        className="Slide-Container  ">  
        <div className="Slide-OverLay"></div>
        <div className="Slide-contend">
            <h1 className="Slide-Movie-Name">{curitem.name || curitem.original_name || curitem.original_title}</h1>
            <div className="Slide-btns">
                <div 
                onClick={()=>{
                    // AddNewIntoCollection(ColrefViewRecently,{
                    //     Film:JSON.stringify(curitem)
                    // })

                    dispath(SETCURFILM(curitem));
                    navigate(`/Detail?id=${curitem.id}&type=movie`)
                }}
                className="Play-Btn primary-btn">
                    <h4>Play Now</h4>
                </div>
                <div 
                onClick={()=>{
                    navigate(`/Detail?id=${curitem.id}&type=movie`)
                }}
                className="MyList-Btn primary-btn">
                    <h4>More Info
                    </h4>
                    <FontAwesomeIcon icon={faExclamationCircle} />
                    
                </div>
            </div>
            <h5 className="Slide-Movie-Overview" > 
               {curitem.overview}
            </h5>
        </div>
    </div> 
        }
     
    </>
    )
}

export default Slider;