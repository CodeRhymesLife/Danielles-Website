// @flow

import React from 'react'
import Helmet from 'react-helmet'

const title = "Blog"

const BlogPage = () =>
	<div>
		<Helmet
			title={title}
			meta={[
				{ name: 'description', content: 'Danielle Hayden\'s blog' },
				{ property: 'og:title', content: title },
			]}
		/>
		<p>Blog</p>
	</div>

export default BlogPage
