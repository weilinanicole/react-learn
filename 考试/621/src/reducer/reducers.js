import {
    TYPE,
    STATUS
} from '../action/action.js'

import {combineReducer} from 'redux'

let initialState={
    data:[]
}

let changeList=(state=initialState,action)=>{
    state=initialState.data;
    switch(action.type){
        case STATUS:
            state=[{
                "title":"【请示流程】",
                "time":"2016.08.01",
                "thing":"拟排教师外出培训",
                "status":"业务科审核",
                "tips":"超时提醒"
            },{
                "title":"【发文】",
                "time":"2016.08.01",
                "thing":"发文于2015年7月21日009号",
                "status":"局长签审",
                "tips":"超时提醒"
            },{
                "title":"【请示流程】",
                "time":"2016.08.01",
                "thing":"拟排教师外出培训",
                "status":"待办",
                "tips":"删除"
            },{
                "title":"【请示流程】",
                "time":"2016.08.01",
                "thing":"拟排教师外出培训",
                "status":"归档",
                
            },{
                "title":"【请示流程】",
                "time":"2016.08.01",
                "thing":"拟排教师外出培训",
                "status":"科室撤稿",
                "tips":"撤回"
            }];
            return state;
        default:
            return state;

    }
}
export default (state,action)=>{
    list:changeList(state,action)
}