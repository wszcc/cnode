import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducer'
import rootSaga from './roootSaga'
 
const sagaMiddleware = createSagaMiddleware()
 
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)
 
sagaMiddleware.run(rootSaga)
 
export default store
