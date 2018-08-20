import {GET_DATA,GET_NUM} from '../action'

let initialState={
    data:[],
    num:0
}

let getData=(state=initialState,action)=>{
    switch(action.type){
        case GET_DATA:
            return action.text;
        default:
            return state.getData
    }
}

let getNum=(state=initialState,action)=>{
    state=initialState.num;
    switch(action.type){
        case GET_NUM:
            return action.text;
        default:
            return state.getNum
    }
}

export default (state,action)=>{
    return {
        getData:getData(state,action),
        getNum:getNum(state,action)
    }
}