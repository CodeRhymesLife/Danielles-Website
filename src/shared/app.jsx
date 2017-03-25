// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import { APP_NAME } from './config'
import Nav from './component/nav'
import HomePage from './component/page/home'
import AboutPage from './component/page/about'
import ArticlesPage from './component/page/articles'
import BlogPage from './component/page/blog'
import BooksPage from './component/page/books'
import ContactPage from './component/page/contact'
import SubscribePage from './component/page/subscribe'
import NotFoundPage from './component/page/not-found'
import ErrorPage from './component/page/error'
import {
	HOME_PAGE_ROUTE,
	ABOUT_PAGE_ROUTE,
	BOOKS_PAGE_ROUTE,
	ARTICLES_PAGE_ROUTE,
	BLOG_PAGE_ROUTE,
	CONTACT_PAGE_ROUTE,
	SUBSCRIBE_PAGE_ROUTE,
	ERROR_PAGE_ROUTE,
} from './routes'

const App = () =>
	<div>
		<h1>{APP_NAME}</h1>
		<Nav />
		<Switch>
			<Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
			<Route path={ABOUT_PAGE_ROUTE} render={() => <AboutPage />} />
			<Route path={BOOKS_PAGE_ROUTE} render={() => <BooksPage />} />
			<Route path={ARTICLES_PAGE_ROUTE} render={() => <ArticlesPage />} />
			<Route path={BLOG_PAGE_ROUTE} render={() => <BlogPage />} />
			<Route path={CONTACT_PAGE_ROUTE} render={() => <ContactPage />} />
			<Route path={SUBSCRIBE_PAGE_ROUTE} render={() => <SubscribePage />} />
			<Route path={ERROR_PAGE_ROUTE} render={() => <ErrorPage />} />
			<Route component={NotFoundPage} />
		</Switch>
	</div>

export default App
