export let getdata= (text)=>{
    return {
        type:'GET',
        text
    }
}
export let get=(text)=>{
    return{
        type:'POST',
        text
    }
}
export let sum=(text)=>{
    return{
        type:'SUM',
        text
    }
}