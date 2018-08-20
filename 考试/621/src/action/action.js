//定义action
const TYPE='CHECK_TYPE';
const STATUS='STATUS';


//事件生成函数
export const checkType=(text)=>{
    return {
        type:TYPE,
        text
    }
}

export const checkStatus=(text)=>{
    return {
        type:STATUS,
        text
    }
}