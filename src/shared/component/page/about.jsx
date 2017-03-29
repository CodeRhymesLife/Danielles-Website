// @flow

import React from 'react'
import Helmet from 'react-helmet'

const title = "About"

const AboutPage = () =>
	<div>
		<Helmet
			title={title}
			meta={[
				{ name: 'description', content: 'A page about Danielle Hayden' },
				{ property: 'og:title', content: title },
			]}
		/>
		<h1>About</h1>
	</div>

export default AboutPage
