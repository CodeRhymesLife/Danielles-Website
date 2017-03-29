// @flow

import compression from 'compression'
import express from 'express'

import routing from './routing'
import { STATIC_PATH, STATIC_PATH_CSS, WEB_PORT } from '../shared/config'
import { isProd } from '../shared/utils'

const app = express()

app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))
app.use(STATIC_PATH_CSS, express.static('node_modules/bootstrap/dist/css')) // redirect bootstrap css

routing(app)

app.listen(WEB_PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' :
		'(development).\nKeep "yarn dev:wds" running in an other terminal'}.`)
})
