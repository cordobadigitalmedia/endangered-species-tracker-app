import { combineReducers} from 'redux'

import { speciesReducer} from './speciesReducer'
import { commentsReducer} from './commentsReducer'

export const rootReducer = combineReducers({
    species: speciesReducer,
    comments: commentsReducer

})