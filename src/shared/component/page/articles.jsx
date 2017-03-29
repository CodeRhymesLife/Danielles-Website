// @flow

import React from 'react'
import Helmet from 'react-helmet'

const title = "Articles"

const ArticlesPage = () =>
	<div>
		<Helmet
			title={title}
			meta={[
				{ name: 'description', content: 'A page about Danielle Hayden\'s articles' },
				{ property: 'og:title', content: title },
			]}
		/>
		<h1>Articles</h1>
	</div>

export default ArticlesPage
