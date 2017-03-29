// @flow

import React from 'react'
import Helmet from 'react-helmet'

const title = "Subscribe"

const SubscribePage = () =>
	<div>
		<Helmet
			title={title}
			meta={[
				{ name: 'description', content: 'A page with information about how to subscribe to Danielle Hayden\'s updates' },
				{ property: 'og:title', content: title },
			]}
		/>
		<p>Subscribe</p>
	</div>

export default SubscribePage
