import { useEffect, useState } from 'react';
import { ImageOption } from '../../Api/ApiConfig';
import '../../grid.css'
import MovieItem from '../MoveItem/MovieItem';
import './ListMovieRow.css';
function ListMovieRow({LinkFetch,Tittle,CurRecent,size}){ 
    const [properties,SetProperties]=useState({
        MaxPage:1,
        curPage:1,
        ArrCur:[],
        Type:""
    })
    if(LinkFetch){
        useEffect(()=>{
            if(LinkFetch){
                async function Fetch(){
                    let res= await fetch(LinkFetch);
                    let data= await res.json();
                    let st1=LinkFetch.includes('/movie')
                    let st2=LinkFetch.includes('/tv');
                    let tmp;
                    if(st1) tmp="movie";
                    else tmp="tv";
                    console.log(tmp,st1,st2,LinkFetch)
                    SetProperties({
                        ...properties,
                        MaxPage:data.total_pages,
                        ArrCur:data.results,
                        Type:tmp
                    })
        
                }
                Fetch();
            }
           
        },[])
    }
    return (
    <>
    <div className="Main-Container-ListMovie">
        
        <h3 className="ListMovie-Tittle">{Tittle}</h3>
        {properties.ArrCur.length ==0? '' :
        <div className="Main-ListMovie row">
            {   
                CurRecent ? CurRecent.map(function(item,idx){
                    return (
                        <MovieItem  key={idx} item={item} Type={properties.Type}/>
                    )
                })
                :
                properties.ArrCur.map(function(item,idx){
                    return (
                        <MovieItem size={size} key={idx} item={item} Type={properties.Type}/>
                    )
                })
            }
        </div>
    }
    </div>
    </>
    )
}
export default ListMovieRow;