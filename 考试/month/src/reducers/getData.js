import {GET_DATA,GET_USER,GET_PWD} from '../action'

let initialState={
    data:[],
    user:'',
    pwd:''
}
let getData=(state=initialState,action)=>{
    switch(action.type){
        case GET_DATA:
            return action.text;
        default:    
            return state.getData
    }
}
let getUser=(state=initialState,action)=>{
    switch(action.type){
        case GET_USER:
            return action.text;
        default:    
            return state.getUser
    }
}
let getPwd=(state=initialState,action)=>{
    switch(action.type){
        case GET_PWD:
            return action.text;
        default:    
            return state.getPwd
    }
}
export default (state,action)=>{
    return {
        getData:getData(state,action),
        getUser:getUser(state,action),
        getPwd:getPwd(state,action)
    }
}