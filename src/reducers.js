import { combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation'

import { Navigator } from './app'

const initialNavState = Navigator.router.getStateForAction(Navigator.router.getActionForPathAndParams('Notes'))

function nav(state = initialNavState, action) {
	let nextState

	switch (action.type) {
		case 'Notes':
			nextState = Navigator.router.getStateForAction(NavigationActions.reset({ routeName: 'Notes' }), state)
			break
		case 'Settings':
			nextState = Navigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Settings' }), state)
			break
		default:
			nextState = Navigator.router.getStateForAction(action, state)
			break
	}

	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state
}

const initialAuthState = { isLoggedIn: false }

function auth(state = initialAuthState, action) {
	switch (action.type) {
		case 'Login':
			return { ...state, isLoggedIn: true }
		case 'Logout':
			return { ...state, isLoggedIn: false }
		default:
			return state
	}
}

const initialSettings = { theme: 'seti' }
function settings(state = initialSettings, action) {
	return state
}

const AppReducer = combineReducers({
	nav,
	auth,
	settings,
})

export default AppReducer
