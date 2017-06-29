import { combineReducers } from 'redux'
import locationReducer from './location'
import userReducer from './user'
import postReducer from './post'
import loadingReducer from './loading'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    user: userReducer,
    loading: loadingReducer,
    entities: combineReducers({
      posts: postReducer,
    }),
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
