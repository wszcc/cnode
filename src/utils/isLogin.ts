function isLogin ():boolean{
    let token =localStorage.getItem('accessToken')
    if(token){
        return true
    }else{
        return false
    }
}

export  default isLogin