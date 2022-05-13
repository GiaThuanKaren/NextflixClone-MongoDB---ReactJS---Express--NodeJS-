export const SETCURFILM=function(data){
    console.log(data)
    return {
        type:'SetCurFilm',
        payload:data
    }
}

export const SETLOGIN=function(data){
    console.log("Login Func ",data)
    return {
        type:'SetLog',
        payload:data
    }
}