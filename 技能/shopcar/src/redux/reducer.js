import {comblineReducers, combineReducers} from 'redux';
let initalState =[

]
    
   

let getdata = (state=initalState,action)=>{
     switch(action.type){
        case "GET":
        return action.text;
        default:
        return state
     }
}
let get = (state=initalState,action)=>{
    switch(action.type){
       case "POST":
       return [...action.text];
       default:
       return state
    }
}
let sum = (state=initalState,action)=>{
    switch(action.type){
       case "SUM":
       let lastPrice=0;
       action.text.forEach((item,index)=>{
           lastPrice += item.num!=0?item.num*item.price:0
    })
       return lastPrice;
       default:
       return state
    }
}
let com = combineReducers({
    getdata,
    get,
    sum
})
export default com;
