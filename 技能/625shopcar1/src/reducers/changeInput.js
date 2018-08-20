import {CHANGE_INPUT} from '../action'

let initialState={
    num:0
}

let changeInput=(state=initialState,action)=>{
    switch(action.type){
        case CHANGE_INPUT:
            return action.text
        default:
            return state.getData
    }
}


export default (state,action)=>{
    return{
        changeInput:changeInput(state,action)
    }
}