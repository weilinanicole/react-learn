export const IS_LOGIN='IS_LOGIN'
export const GET_DATA='GET_DATA'
export const CHANGE_PRICE='CHANGE_PRICE'

export let isLogin=(text)=>{
    return {
        type:IS_LOGIN,
        text
    }
}
export let getData=(text)=>{
    return {
        type:GET_DATA,
        text
    }
}

export let changePrice=(text)=>{
    return {
        type:CHANGE_PRICE,
        text
    }
}