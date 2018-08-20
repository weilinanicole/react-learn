import {GET_DATA,GET_INDEX} from '../action'
let initialState={
    data:[],
    num:0
}

let getData=(state=initialState,action)=>{
    switch(action.type){
        case GET_DATA:
            return action.text
        default:
            return state.getData
    }
}

let getIndex=(state=initialState,action)=>{
    switch(action.type){
        case GET_INDEX:
            return action.text
        default:
            return state.getIndex
    }
}

export default (state,action)=>{
    return {
        getData:getData(state,action),
        getIndex:getIndex(state,action)
    }
}