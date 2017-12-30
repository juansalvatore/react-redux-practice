import { combineReducers } from 'redux'
import CardReducer from './card_reducer'

const rootReducer = combineReducers({
  card: CardReducer,
})

export default rootReducer
