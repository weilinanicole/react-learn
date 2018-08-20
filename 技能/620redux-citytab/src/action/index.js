const CHANGE_PROVINCE='CHANGE_PROVINCE';
const CHANGE_CITY='CHANGE_CITY';
const CLICK_INDEX='CLICK_INDEX';


export let changeCity=(text)=>{
    //接收一个参数，text,return一个对象，type定义类型，text是接收到的值
    return {
        type:CHANGE_CITY,
        text
    }
}

export let changeProvince=(text)=>{
    return {
        type:CHANGE_PROVINCE,
        text
    }
}

export let clickIndex=(text)=>{
    return {
        type:CLICK_INDEX,
        text
    }
}