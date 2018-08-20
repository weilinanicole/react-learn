export default (state=[],action)=>{
    switch(action.type){
        case 'CHANGE_CITY':
            return state=action.text;
        default:
            return state
    }
}