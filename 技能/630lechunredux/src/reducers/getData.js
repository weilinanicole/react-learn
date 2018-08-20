import {GET_DATA,IS_LOGIN,LOGIN} from '../action'
let initialState={
    data:[],
    num:0,
    isIs:false
}
let getData=(state=initialState,action)=>{
    switch(action.type){
        case GET_DATA:
            return action.text;
        default:
            return action.getData
    }
}
let isLogin=(state=initialState,action)=>{
    switch(action.type){
        case IS_LOGIN:
            return true;
        case LOGIN:
            return false;
        default:
            return false
    }
}

export default (state,action)=>{
    return {
        getData:getData(state,action),
        isLogin:isLogin(state,action)
    }
}