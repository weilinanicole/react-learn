import React from 'react';
const ChildOne=(props)=>{
    return <div>
        <li onClick={props.myclick}>我叫：{props.names}，年龄是：{props.age}</li>
        <input type="text" onChange={props.changeValue} defaultValue={props.names}/>
    </div>
}
export default ChildOne