// @flow

import { SheetsRegistry, SheetsRegistryProvider } from 'react-jss'
import Helmet from 'react-helmet'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'

import App from './../shared/app'
import { APP_CONTAINER_CLASS, JSS_SSR_CLASS, STATIC_PATH, STATIC_PATH_CSS, WDS_PORT } from '../shared/config'
import { isProd } from '../shared/utils'

const renderApp = (location: string, plainPartialState: ?Object, routerContext: ?Object = {}) => {
	const sheets = new SheetsRegistry()
	const appHtml = ReactDOMServer.renderToString(
		<StaticRouter location={location} context={routerContext}>
			<SheetsRegistryProvider registry={sheets}>
				<App />
			</SheetsRegistryProvider>
		</StaticRouter>)
	const head = Helmet.rewind()

	return (
		`<!doctype html>
		<html>
			<head>
				${head.title}
        		${head.meta}
        		<link rel="stylesheet" href="${STATIC_PATH_CSS}/style.css">
				<link rel="stylesheet" href="${STATIC_PATH_CSS}/bootstrap.min.css">
				<style class="${JSS_SSR_CLASS}">${sheets.toString()}</style>
			</head>
			<body>
				<div class="${APP_CONTAINER_CLASS} container">${appHtml}</div>
				<script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
			</body>
		</html>`
	)
}

export default renderApp
