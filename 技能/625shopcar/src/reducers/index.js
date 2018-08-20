import {combineReducers} from 'redux'

import getData from './getData.js'
import changeInput from './changeInput.js'

export default combineReducers({
    getData:getData,
    changeInput:changeInput
})