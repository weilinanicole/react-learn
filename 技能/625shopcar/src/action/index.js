//获取整个数据
export const GET_DATA='GET_DATA'
//点击input框改变状态
export const CHANGE_INPUT='CHANGE_INPUT'


export let getData=(text)=>{
    return {
        type:GET_DATA,
        text
    }
}
export let changeInput=(text)=>{
    return {
        type:CHANGE_INPUT,
        text
    }
}