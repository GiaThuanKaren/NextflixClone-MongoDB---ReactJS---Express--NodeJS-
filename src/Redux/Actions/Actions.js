export const SETCURFILM=function(data){
    console.log(data)
    return {
        type:'SetCurFilm',
        payload:data
    }
}