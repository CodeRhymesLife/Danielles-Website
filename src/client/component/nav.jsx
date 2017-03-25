// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'
import {
	HOME_PAGE_ROUTE,
	ABOUT_PAGE_ROUTE,
	BOOKS_PAGE_ROUTE,
	ARTICLES_PAGE_ROUTE,
	BLOG_PAGE_ROUTE,
	CONTACT_PAGE_ROUTE,
	SUBSCRIBE_PAGE_ROUTE,
	NOT_FOUND_DEMO_PAGE_ROUTE,
} from '../../shared/routes'

const Nav = () =>
	<nav>
		<ul>
			{[
				{ route: HOME_PAGE_ROUTE, label: 'Home' },
				{ route: ABOUT_PAGE_ROUTE, label: 'About' },
				{ route: BOOKS_PAGE_ROUTE, label: 'Books' },
				{ route: ARTICLES_PAGE_ROUTE, label: 'Articles' },
				{ route: BLOG_PAGE_ROUTE, label: 'Blog' },
				{ route: CONTACT_PAGE_ROUTE, label: 'Contact' },
				{ route: SUBSCRIBE_PAGE_ROUTE, label: 'Subscribe' },
				{ route: NOT_FOUND_DEMO_PAGE_ROUTE, label: '404 Demo' },
			].map(link => (
				<li key={link.route}>
					<NavLink to={link.route} activeStyle={{ color: 'limegreen' }} exact>{link.label}</NavLink>
				</li>
			))}
		</ul>
	</nav>

export default Nav