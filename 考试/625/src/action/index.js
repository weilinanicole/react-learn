export const GET_DATA='GET_DATA'
export const GET_INDEX='GET_INDEX'
export let getData=(text)=>{
    return {
        type:GET_DATA,
        text
    }
}
export let getIndex=(text)=>{
    return {
        type:GET_INDEX,
        text
    }
}