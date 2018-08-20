import {createStore} from 'redux'

import reducer from '../reducer/reducers.js'

let store=createStore(reducer)

export default store