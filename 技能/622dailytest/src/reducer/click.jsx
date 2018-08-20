import {CLICK_NUM,CHANGE_INDEX,GETDATA} from '../action'
let initialState={
    data:'',
    num:0
}
let getData=(state=initialState,action)=>{
    switch(action.type){
        case GETDATA:
            return action.text;
        default:
            return state.getData
    }
}
let clickNum=(state=initialState,action)=>{
    switch(action.type){
        case CLICK_NUM:
            return action.text;
        default:
            return state.clickNum
    }
}
let changeIndex=(state=initialState,action)=>{
    switch(action.type){
        case CHANGE_INDEX:
            return action.text;
        default:
            return state.changeIndex
    }
}
export default (state,action)=>{
    return {
        clickNum:clickNum(state,action),
        changeIndex:changeIndex(state,action),
        getData:getData(state,action)
    }
}

