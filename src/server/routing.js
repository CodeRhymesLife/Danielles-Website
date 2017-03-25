// @flow

import renderApp from './render-app'

export default (app: Object) => {
	app.get('*', (req, res) => {
		res.send(renderApp(req.url))
	})

	// eslint-disable-next-line no-unused-vars
	app.use((err, req, res, next) => {
		// eslint-disable-next-line no-console
		console.error(err.stack)
		res.status(500).send('Something went wrong!')
	})
}
