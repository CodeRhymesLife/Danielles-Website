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
		<p>About</p>
	</div>

export default AboutPage
