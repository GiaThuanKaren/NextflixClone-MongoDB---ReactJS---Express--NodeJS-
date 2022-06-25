// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import {
    getFirestore,
    collection,
    addDoc,
    getDocs
} from 'firebase/firestore'
import { useState } from "react";
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD5ZpImDzQtwf26LoUixMFiskFO_N8kM-8",
    authDomain: "nextflix-clone-giathuan.firebaseapp.com",
    projectId: "nextflix-clone-giathuan",
    storageBucket: "nextflix-clone-giathuan.appspot.com",
    messagingSenderId: "122081938831",
    appId: "1:122081938831:web:bb2d4f4cf2b0ee2d708ffa"
  };
const app = initializeApp(firebaseConfig);
export const MainDB=getFirestore();
export const ColrefMyList=collection(MainDB,'MyList')
export const ColrefViewRecently=collection(MainDB,'ViewRecently')


export const GetCollection=function(NameDB,NameCollection){
    return collection(NameDB,NameCollection)
}

export const AddNewIntoCollection=function(NameCollection,data){
    // console.log(GetCollection(MainDB,NameCollection))
    addDoc(NameCollection,data);
}

export const GetDataFromCollection=function(NameCollection){
    const [state,setState]=useState([]);
    getDocs(NameCollection)
        .then(function(items){
            setState(items.docs);
        })
    if(state.length!=0)
        return state;
}