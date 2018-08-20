import * as actionType from '../action/actionType';
let initState = {
    getData:null,
    user:'',
    pwd:''
}
let getData = (state,action)=>{
    switch (action.type) {
        case 'GET_DATA':
            return [...action.text]
        default:
            return state.getData
    }
}
let getUser = (state, action) => {
    switch (action.type) {
        case 'USER':
            return action.text
        default:
            return state.user
    }
}
let getPwd = (state, action) => {
    switch (action.type) {
        case 'PWD':
            return action.text
        default:
            return state.pwd
    }
}
export default (state=initState,action)=>{
    return {
        getData:getData(state,action),
        user:getUser(state,action),
        pwd:getPwd(state,action)
    }
}