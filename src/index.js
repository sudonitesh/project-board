import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import $ from 'jquery'

import * as serviceWorker from './serviceWorker'
import App from './components/App'
import Store from './store'
import { PersistGate } from 'redux-persist/integration/react'

const { persistor, store } = Store()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

$(document).bind('DOMNodeRemoved', function(e) {
  console.log('Removed: ' + e.target.nodeName)
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
