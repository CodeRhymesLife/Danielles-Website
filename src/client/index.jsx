// @flow

import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import ComingSoon from './comingSoon'
import { APP_CONTAINER_SELECTOR } from '../shared/config'

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

const wrapApp = AppComponent =>
	<AppContainer>
		<AppComponent />
	</AppContainer>

ReactDOM.render(wrapApp(ComingSoon), rootEl)

if (module.hot) {
	// flow-disable-next-line
	module.hot.accept('./comingSoon', () => {
		// eslint-disable-next-line global-require
		const NextApp = require('./comingSoon').default
		ReactDOM.render(wrapApp(NextApp), rootEl)
	})
}
