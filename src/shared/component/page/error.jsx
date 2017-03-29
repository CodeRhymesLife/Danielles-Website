// @flow

import React from 'react'
import Helmet from 'react-helmet'

const title = "Error"

const ErrorPage = () =>
	<div>
		<Helmet
			title={title}
			meta={[
				{ name: 'description', content: 'The default error page for Danielle Hayden\'s website' },
				{ property: 'og:title', content: title },
			]}
		/>
		<p>Error</p>
	</div>

export default ErrorPage
