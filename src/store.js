import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'

const middlewares = []
middlewares.push(thunk)

if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger())
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
)

export default store
