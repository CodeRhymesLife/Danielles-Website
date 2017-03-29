// @flow

import React from 'react'
import Helmet from 'react-helmet'

const title = "Not Found"

const NotFoundPage = () =>
	<div>
		<Helmet
			title={title}
			meta={[
				{ name: 'description', content: 'A page shown when the requested page on Danielle Hayden\'s website is not found' },
				{ property: 'og:title', content: title },
			]}
		/>
		<h1>Page Not Found</h1>
	</div>

export default NotFoundPage
