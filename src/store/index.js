import { combineReducers } from 'redux'
import { getBeer } from './reducers'
//combineReducers from redux
export const store = combineReducers({
  beerData: getBeer,
})
