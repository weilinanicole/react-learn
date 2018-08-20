export const GET_DATA='GET_DATA'

export const IS_LOGIN='IS_LOGIN'

export const LOGIN='LOGIN'

export let getData=(text)=>{
    return {
        type:GET_DATA,
        text
    }
}
export let isLogin=(text)=>{
    return {
        type:IS_LOGIN,
        text
    }
}
export let login=(text)=>{
    return {
        type:LOGIN,
        text
    }
}