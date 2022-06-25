import Footer from "../../Components/Footer/Footer";
import '../../grid.css'
import './MysList.css'
import { NavBar } from "../../Components/Header/Header";
import MovieItem from "../../Components/MoveItem/MovieItem";
import { useEffect, useState } from "react";
import { getDocs, onSnapshot } from "firebase/firestore";
import { ColrefMyList } from "../../FireBase/Firebase-Config";
import { Grid } from "@mui/material";

function MyList(){
    const [State,SetState]=useState([]);

    useEffect(()=>{
        
    },[])
    return (
        <>
            <NavBar />
            <Grid>

            </Grid>
            <Footer />
        </>
    )
}

export default MyList;