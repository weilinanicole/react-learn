export default (state=[],action)=>{
    switch(action.type){
        case 'CHANGE_TYPE':
            return state=action.text;
        default:
            return state;
    }
}