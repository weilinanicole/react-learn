import React from 'react';
const newModule=(props)=>{
    return (
        <div>
            <p onClick={props.myClick}>这个一个组件,我已经学习了{Math.floor(Math.random()*10)}个月,我的名字是{props.names},年龄是{props.count}</p>
            <li>{props.children}</li>
        </div>
    )
}
export default newModule