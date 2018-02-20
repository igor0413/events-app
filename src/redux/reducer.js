import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import {reducer as form} from 'redux-form'
import authReducer, {moduleName as authModule} from '../ducks/auth'
import peopleReducer, {moduleName as peopleModule} from '../ducks/people'
import eventsReducer, {moduleName as eventsModule} from '../ducks/events'

export default combineReducers({
  router, form,
  [authModule]: authReducer,
  [peopleModule]: peopleReducer,
  [eventsModule]: eventsReducer
})