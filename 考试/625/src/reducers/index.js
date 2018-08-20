import {combineReducers} from 'redux'

import getData from './data.js'
import getIndex from './data.js'

export default combineReducers({
    getData,
    getIndex
})