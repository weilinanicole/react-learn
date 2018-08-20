export const CLICK_NUM='CLICK_NUM'
export const CHANGE_INDEX='CHANGE_INDEX'
export const GETDATA='GETDATA'


//获取总数据
export let getData=(text)=>{
    return {
        type: GETDATA,
        text
    }
}
//底部数字的变化
export let clickNum=(text)=>{
    return {
        type:CLICK_NUM,
        text
    }
}
//下标改变，以至于对应的路径也发生改变
export let changeIndex=(text)=>{
    return {
        type:CHANGE_INDEX,
        text
    }
}
