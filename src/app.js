import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'

import Notes from './notes'
import Settings from './settings'

export const Navigator = StackNavigator({
	Notes: { screen: Notes },
	Settings: { screen: Settings },
})

const AppNavState = ({ dispatch, nav }) => {
	return <Navigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
}
AppNavState.propTypes = {
	dispatch: PropTypes.func.isRequired,
	nav: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
	nav: state.nav,
})

export default connect(mapStateToProps)(AppNavState)
