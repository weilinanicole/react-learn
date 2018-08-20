export const GET_DATA='GET_DATA'

export const GET_USER='GET_USER'

export const GET_PWD='GET_PWD'

export let getData=(text)=>{
    return {
        type:GET_DATA,
        text
    }
}
export let getUser=(text)=>{
    return {
        type:GET_USER,
        text
    }
}
export let getPwd=(text)=>{
    return {
        type:GET_PWD,
        text
    }
}