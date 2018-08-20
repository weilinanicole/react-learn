import * as actionType from './actionType';
export const getData = (text)=>{
    return {
        type:actionType.GET_DATA,
        text
    }
}
export const getUser = (text)=>{
    return {
        type:actionType.USER,
        text
    }
}
export const getPwd = (text) => {
    return {
        type:actionType.PWD,
        text
    }
}