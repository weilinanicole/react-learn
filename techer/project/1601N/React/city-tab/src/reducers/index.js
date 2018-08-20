import {combineReducers} from 'redux';
//引入city组件
import city from './city';
//引入province组件
import province from './province';
//合并数据
export default combineReducers({
    city,
    province
})