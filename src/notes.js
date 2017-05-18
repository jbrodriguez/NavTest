import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import { connect } from 'react-redux'

class Notes extends Component {
	static navigationOptions = ({ navigation, screenProps }) => {
		console.log(`screenProps-${JSON.stringify(screenProps)}`)
		console.log(`screenProps.theme-${JSON.stringify(screenProps.theme)}`)
		return {
			title: 'Notes',
			headerRight: <Button onPress={() => navigation.navigate('Settings')} title="Settings" />,
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Notes
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
})

const mapStateToProps = state => ({ theme: state.settings.theme })

export default connect(mapStateToProps)(Notes)
