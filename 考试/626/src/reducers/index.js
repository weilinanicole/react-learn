import {combineReducers} from 'redux'

import getData from './getData.jsx'

import getIndex from './getData.jsx'

export default combineReducers({
    getData:getData,
    getIndex:getIndex
})