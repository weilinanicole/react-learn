import {combineReducers} from 'redux'
import getData from './getData.js'
import getUser from './getData.js'
import getPwd from './getData.js'
export default combineReducers({
    getData,
    getUser,
    getPwd
})