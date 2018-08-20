// let initialState={
//     status:'all'
// }
export default (state=[],action)=>{
    switch(action.type){
        case 'CHANGE_STATUS':
            return state=action.text;
        default:
            return state;
    }
}

// let status=(state=initialState,action)=>{

// }