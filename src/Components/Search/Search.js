import './Search.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {fas, faSearch} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search(){
    const [IsClosed,SetIsClosed]=useState(false)
    const [Data,SetData]=useState('');
    const navigate=useNavigate()
    const HandleInput=function(text){
        SetData(text)
        console.log(text)
    }
    return (
    <>
    <div className="Search-Container">
        <FontAwesomeIcon
            onClick={()=>{
                SetIsClosed(!IsClosed);
            }}
            icon={faSearch}/>
        {IsClosed &&
            <input
            value={Data}
            onChange={
                (e)=>{
                
                HandleInput(e.target.value)
            }
            }
            onKeyUp={(e)=>{
                if(e.which==13) {
                    
                    if(Data.trim()!=''){
                        
                        SetIsClosed(false);
                        // Data..replace(/ /g, '');
                        navigate(`/Search?query=${Data}`)
                    }
                }
            }}
            className="Input-Search" 
            type="text" />
            }
    </div>
    </>
    )
}

export default Search;