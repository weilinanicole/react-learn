export const GET_DATA='GET_DATA'

export let getData=(text)=>{
    return {
        type:GET_DATA,
        text
    }
}