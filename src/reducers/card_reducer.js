import { FETCH_CARD } from './../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CARD:
      return action.payload
  }
  return state
}
