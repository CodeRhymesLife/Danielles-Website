// @flow

import React from 'react'
import Helmet from 'react-helmet'

const title = "Books"

const BooksPage = () =>
	<div>
		<Helmet
			title={title}
			meta={[
				{ name: 'description', content: 'A page about Danielle Hayden\'s books' },
				{ property: 'og:title', content: title },
			]}
		/>
		<h1>Books</h1>
	</div>

export default BooksPage
