import {GET_DATA}from '../action'

let initialState={
    data:[]
}

let getData=(state=initialState,action)=>{
    switch(action.type){
        case GET_DATA:
            return action.text
        default:
            return state.getData
    }
}
export default (state,action)=>{
    return {
        getData:getData(state,action)
    }
}