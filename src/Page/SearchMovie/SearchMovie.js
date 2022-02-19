import { useEffect, useState } from "react";
import {useSelector} from "react-redux"
import {Base_Url,ApiKey} from '../../Api/ApiConfig'
import Footer from "../../Components/Footer/Footer";
import { NavBar } from "../../Components/Header/Header";
import MovieItem from "../../Components/MoveItem/MovieItem";
import '../../grid.css'
function SearchMovie(){
    const params = new URLSearchParams(location.search).get('query')
    const CurState=useSelector((state)=>state);
    const [Curpage,SetCurPage]=useState(1);
    const [properties,Setproperties]=useState({
        MaxPage:1,
        CurFilm:[]
    });
    console.log(properties.CurFilm,properties.curPage)
    const HandlePage=function(){
        if(Curpage<properties.MaxPage)
            SetCurPage(Curpage+1);
    }
    useEffect(()=>{
        console.log("Fetching...")
        // console.log(params.get('query'),params.get('data'))
        fetch(`${Base_Url}/search/movie?${ApiKey}&query=${params}&page=${Curpage}`)
            .then(res=>res.json())
            .then(function(items){
                console.log(items)
                let tmp=properties.curPage+1;
                    Setproperties({
                        curPage:tmp,
                        MaxPage:items.total_pages,
                        CurFilm:[...properties.CurFilm,...items.results]
                    })
                // if(properties.curPage<properties.MaxPage){
                //     console.log("Increasing..")
                    
                //     console.log("Curpage",tmp)
                // }
                
                
                
            })
    },[Curpage])
    return(
    <>
        <NavBar />
        <div className="Main-contaner-Search-Page grid">
            <div className="List-Movie-Search row">
                {properties.CurFilm.map(function(item,idx){
                    if(item.poster_path)
                        return <MovieItem key={idx} item={item} Type='movie'/>
                })}
            </div>
            <button
                onClick={HandlePage}
             >Load More</button>
        </div>
        <Footer />  
    </>
    )
}
export default SearchMovie;