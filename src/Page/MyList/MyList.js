import Footer from "../../Components/Footer/Footer";
import '../../grid.css'
import './MysList.css'
import { NavBar } from "../../Components/Header/Header";
import MovieItem from "../../Components/MoveItem/MovieItem";
import { useEffect, useState } from "react";
import { getDocs, onSnapshot } from "firebase/firestore";
import { ColrefMyList } from "../../FireBase/Firebase-Config";

function MyList(){
    const [State,SetState]=useState([]);

    useEffect(()=>{
        getDocs(ColrefMyList)
        .then((snap)=>{
                // console.log(snap)
                let arr=snap.docs.map(function(item,idx){
                    return {
                        item:JSON.parse(item.data().Film),
                        id:item.id,
                        Type:JSON.parse(item.data().Type)
                    }
                })
                console.log("Arr My list ", arr)
                SetState(arr)
        })
    },[])
    return (
        <>
            <NavBar />
            <div className="MyList-Movie row" >
                {
                    State.length!=0 ? State.map(function(item,idx){
                      return <MovieItem key={idx} item={item.item} Type={item.Type} size="medium"/>
                    }) :''
                }
                
            </div>
            <Footer />
        </>
    )
}

export default MyList;