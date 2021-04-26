import { createWrapper } from 'next-redux-wrapper'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

const middleware = [thunk]

const makeStore = () => createStore(reducer, compose(applyMiddleware(...middleware)))
export const wrapper = createWrapper(makeStore)