import {IS_LOGIN,GET_DATA,CHANGE_PRICE} from '../action'
let initialState={
    isLogin:true,
    data:[],
    num:0
}
let isLogin=(state=initialState,action)=>{
    switch(action.type){
        case IS_LOGIN:
            return action.text;
        default:
            return state.isLogin
    }
}

let getData=(state=initialState,action)=>{
    switch(action.type){
        case GET_DATA:
            return action.text;
        default:
            return state.getData
    }
}

let changePrice=(state=initialState,action)=>{
    switch(action.type){
        case CHANGE_PRICE:
            return action.text;
        default:
            return state.changePrice
    }
}

export default (state,action)=>{
    return {
        isLogin:isLogin(state,action),
        getData:getData(state,action),
        changePrice:changePrice(state,action)
    }
}