import React from 'react'
import { AppRegistry } from 'react-native'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import AppReducer from './reducers'
import App from './app'

class Root extends React.Component {
	store = createStore(AppReducer)

	render() {
		return (
			<Provider store={this.store}>
				<App />
			</Provider>
		)
	}
}

AppRegistry.registerComponent('NavTest', () => Root)
