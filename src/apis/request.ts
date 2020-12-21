import getData from './index'

export const requestHomePage=()=>{
    return getData({
        url:'topics ',
        type:'GET'
    })
}

export {}