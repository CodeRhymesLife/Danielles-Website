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
		<p>Contact</p>
	</div>

export default ContactPage
