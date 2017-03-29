// @flow

import React from 'react'
import Helmet from 'react-helmet'

const title = "Contact"

const ContactPage = () =>
	<div>
		<Helmet
			title={title}
			meta={[
				{ name: 'description', content: 'A page with Danielle Hayden\'s contact information' },
				{ property: 'og:title', content: title },
			]}
		/>
		<h1>Contact</h1>
	</div>

export default ContactPage
