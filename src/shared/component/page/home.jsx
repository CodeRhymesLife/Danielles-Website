// @flow

import React from 'react'
import Helmet from 'react-helmet'

import { APP_NAME } from '../../config'

const HomePage = () => 
	<div>
		<Helmet
			meta={[
				{ name: 'description', content: 'Danielle Hayden\'s home page' },
				{ property: 'og:title', content: APP_NAME },
			]}
		/>
		<h1>Danielle Hayden</h1>
  </div>

export default HomePage
