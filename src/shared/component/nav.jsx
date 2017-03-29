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
} from '../routes'

const Nav = () =>
	<nav className="navbar navbar-default">
		<div className="container-fluid">

			<div className="navbar-header">
				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
				<a className="navbar-brand" href="#">Danielle</a>
			</div>

			<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul className="nav navbar-nav">
					{[
						{ route: HOME_PAGE_ROUTE, label: 'Home' },
						{ route: ABOUT_PAGE_ROUTE, label: 'About' },
						{ route: BOOKS_PAGE_ROUTE, label: 'Books' },
						{ route: ARTICLES_PAGE_ROUTE, label: 'Articles' },
						{ route: BLOG_PAGE_ROUTE, label: 'Blog' },
						{ route: CONTACT_PAGE_ROUTE, label: 'Contact' },
						{ route: SUBSCRIBE_PAGE_ROUTE, label: 'Subscribe' },
					].map(link => (
						<li key={link.route}>
							<NavLink to={link.route} activeStyle={{ color: 'limegreen' }} exact>{link.label}</NavLink>
						</li>
					))}
				</ul>
			</div>
		</div>
	</nav>

export default Nav
