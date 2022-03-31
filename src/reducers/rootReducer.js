import { combineReducers} from 'redux'

import { speciesReducer } from './speciesReducer'
import { organizationsReducer } from './organizationsReducer'

export const rootReducer = combineReducers({
    species: speciesReducer,
    organizations: organizationsReducer

})