const InitialState={
    CurFilm:{},
    ViewRecently:[],
    isLogin: localStorage.getItem('user') ? true : false,
}
const rootReducer=function(state=InitialState,action){
    switch(action.type){
        case 'SetCurFilm':{
            return {
                ...state,
                CurFilm:{
                    ...action.payload
                }
            }
        }
        case 'SetViewRecently':{
            let arr=[];
            for(let i=0;i<state.ViewRecently.length;i++){
                let res=arr.find(function(item,idx){
                    return item.id==state.ViewRecently[i];
                })
                if(!res)
                    arr.push(state.ViewRecently[i]);
            }
            
            return {
                ...state,
                ViewRecently:arr
            }
        }
        case 'SetLog':{
            return {
                ...state,
                isLogin:action.payload
            }
        }
        default:{
            return state
        }
    }
}

export default rootReducer