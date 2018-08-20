export const GET_DATA='GET_DATA'
export const GET_NUM='GET_NUM'

export let getData=(text)=>{
    return {
        type:GET_DATA,
        text
    }
} 

export let getNum=(text)=>{
    return {
        type:GET_NUM,
        text
    }
}
