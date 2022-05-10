import ListMovieRow from '../../Components/ListMovieRow/ListMovieRow';
import { Base_Url, FetchOption } from '../../Api/ApiConfig';
import './Home.css'
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    docs,
    onSnapshot
} from 'firebase/firestore'
import { ColrefMyList, ColrefViewRecently, MainDB } from '../../FireBase/Firebase-Config';
import { useEffect, useState } from 'react';
function Home(){
    const [state,SetState]=useState([]);
    // onSnapshot(ColrefViewRecently,(snap)=>{
    //     if(snap.docs.length==0) console.log("Empty")
    //     else{
    //         let arr=snap.docs.map(function(items,idx){
    //             return JSON.parse(items.data().Film)
    //         })
    //         // console.log(arr)
    //         SetState(arr);
    //     }
    // })
    return (
        <>
            <div className="Main-Home">
            {/* {state.length!=0 && <ListMovieRow Tittle="Recently" CurRecent={state}  />} */}
                <ListMovieRow Tittle="Up Coming" LinkFetch={Base_Url+FetchOption.fetchUpcoming} size="medium" />
                <ListMovieRow Tittle="NextFlix Original" LinkFetch={Base_Url+FetchOption.fetchNextFlixOriginal} size="medium"/>
                <ListMovieRow Tittle="Trending" LinkFetch={Base_Url+FetchOption.fetchTrending} size="small"/>
                <ListMovieRow Tittle="Top Movie Rated" LinkFetch={Base_Url+FetchOption.FetchtopRated} size="small"/>
                <ListMovieRow Tittle="Top TV Rated" LinkFetch={Base_Url+FetchOption.fetchTvToprated} size="small"/>
                <ListMovieRow Tittle="Top TV On Air" LinkFetch={Base_Url+FetchOption.fetchTvOnAir} size="small"/>
                <ListMovieRow Tittle="Action Movie" LinkFetch={Base_Url+FetchOption.FetchActionMovie} size="small"/>
                <ListMovieRow Tittle="Comedy Movie" LinkFetch={Base_Url+FetchOption.FetchComedyMovie} size="small"/>
                <ListMovieRow Tittle="Documentary Movie" LinkFetch={Base_Url+FetchOption.FetchDocumentaries} size="small"/>
                <ListMovieRow Tittle="Honor Movie" LinkFetch={Base_Url+FetchOption.FetchHonor} size="small"/>
                <ListMovieRow Tittle="Romance Movie" LinkFetch={Base_Url+FetchOption.FetchRomanceMovie} size="small"/>            
                <ListMovieRow Tittle="War Movie" LinkFetch={Base_Url+FetchOption.FetchWar} size="small"/>            
                <ListMovieRow Tittle="Science Fiction" LinkFetch={Base_Url+FetchOption.FetchScienceFiction} size="small"/>            
                <ListMovieRow Tittle="Thriller" LinkFetch={Base_Url+FetchOption.fetchThriller} size="small"/>            
                <ListMovieRow Tittle="Animation" LinkFetch={Base_Url+FetchOption.fetchAnimation} size="small"/>            
                <ListMovieRow Tittle="Crime" LinkFetch={Base_Url+FetchOption.fetchCrime} size="small"/>            

            </div>
        </>
    )
}

export default Home;