const CHANGE_TYPE='CHANGE_TYPE';
const CHANGE_STATUS='CHANGE_STATUS';


export let changeType=(text)=>{
    return {
        type:CHANGE_TYPE,
        text
    }
}
export let changeStatus=(text)=>{
    return {
        type:CHANGE_STATUS,
        text
    }
}