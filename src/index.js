/** @format */
//import React from 'react';
import ReactDOM from 'react-dom'

// for redux
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { store } from './store'

// redux persist
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import storage from 'redux-persist/lib/storage'

import ReactRouter from './router/ReactRouter'
import './assets/styles/_style.scss'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, store)

const store1 = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(reduxThunk)),
)
// without persist store

// const store2 = createStore(
//   store,
//   composeEnhancers(applyMiddleware(reduxThunk)),
// )

// rootElement variable
const rootElement = document.querySelector('#root')

const persistor = persistStore(store1)
ReactDOM.render(
  <Provider store={store1}>
    <PersistGate loading={null} persistor={persistor}>
      <ReactRouter />
    </PersistGate>
  </Provider>,
  rootElement,
)
