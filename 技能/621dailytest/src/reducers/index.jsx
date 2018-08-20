import {combineReducers} from 'redux'

import status from './status'
import type from './type'

export default combineReducers({
    type,
    status
})