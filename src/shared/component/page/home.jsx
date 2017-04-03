// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'

import { APP_NAME, STATIC_PATH_IMAGES } from '../../config'

const styles = {
	mainImage : {
		width: "250px",
		height: "210px",
		float: "left",
		'margin-top': '-20px',
		'margin-left': '-20px',
		'margin-right': '20px',
	},

	'@media (max-width: 768px)': {
		"mainImage" : {
			width: "125px",
			height: "105px",
			float: "left",
		},
	},

	row: {
		'text-align': "center",
	},

	col: {
		display: 'inline-block',
		float: 'none',
	},

	socialIcon: {
		display: 'inline-block',
		width: "30px",
		height: "30px",
		float: 'none',
	},
}

const HomePage = ({ classes }: { classes: Object }) => 
	<div>
		<Helmet
			meta={[
				{ name: 'description', content: 'Danielle Hayden\'s home page' },
				{ property: 'og:title', content: APP_NAME },
			]}
		/>
		<h1>Danielle Hayden</h1>

		<p> <img className={classes.mainImage} src={STATIC_PATH_IMAGES + '/mug.png'}/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at lobortis risus. Phasellus at odio sed turpis laoreet facilisis id fringilla ligula. Donec rutrum libero orci, a imperdiet felis consectetur non. Nam et suscipit tortor. Donec egestas, nisi ut varius aliquam, ipsum magna laoreet magna, quis laoreet orci libero dictum odio. Pellentesque pharetra tincidunt lorem, id porttitor justo consectetur eu. Nunc non finibus velit. Sed fermentum eleifend ante, at viverra lorem mollis vel. Integer sodales a nibh ut pulvinar. Quisque iaculis pretium neque, sed pretium odio tempor ut. Proin consequat neque sed vulputate tincidunt. Fusce fermentum urna sed neque facilisis sollicitudin.</p>

		<p>Mauris odio velit, lacinia et bibendum at, efficitur et nulla. Vestibulum vel turpis molestie, gravida dui ut, malesuada eros. Ut molestie tellus elit, sed malesuada urna tincidunt vel. Donec malesuada, turpis in elementum hendrerit, mi sapien convallis lacus, nec molestie risus neque quis lacus. Aliquam condimentum sodales massa vel egestas. Duis eget sollicitudin nulla, sed ultricies risus. Nulla facilisi.</p>

		<p>Vivamus pellentesque porta justo. Ut at magna id diam blandit sagittis. Sed eget leo vehicula lectus dapibus ornare. Nunc eros turpis, sagittis at risus sed, posuere rutrum erat. Mauris eget libero et ante consequat imperdiet. Curabitur ultrices tincidunt mauris, vitae hendrerit erat commodo accumsan. Nulla facilisi. Sed vulputate nibh est, sed mollis lacus pretium in. Nunc et arcu nulla. Praesent venenatis accumsan ante, ac faucibus lectus imperdiet sed.</p>

		<p>Ut consectetur erat ac ante dignissim, vel vulputate lectus dapibus. Donec cursus, orci eu convallis venenatis, orci diam ullamcorper odio, ut hendrerit lacus ante id dui. In sed pretium dui. Maecenas ac ex mauris. Nulla et justo interdum, efficitur sem ac, auctor lacus. Donec rhoncus erat vitae ligula bibendum dictum. Mauris sit amet congue ex, eget consectetur nulla. Ut non erat a sapien maximus facilisis. Integer tincidunt lacus id est feugiat, et efficitur urna condimentum.</p>

		<p>Donec pretium quis diam nec molestie. Morbi accumsan tincidunt massa, in pulvinar lectus venenatis quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vitae pretium erat. In vel pellentesque ante, vitae porttitor metus. Donec sit amet risus pellentesque, efficitur ligula at, consectetur sem. Maecenas fermentum finibus metus et blandit. Cras dapibus mauris ac dolor interdum gravida.</p>

		<div className={"row justify-content-md-center " +classes.row}>
			{[
				{ imagePath: "linkedin-icon.png", href: "" },
				{ imagePath: "facebook-icon.png", href: "" },
				{ imagePath: "instagram-icon.png", href: "" },
				{ imagePath: "twitter-icon.png", href: "" },
			].map(iconData => (
				<div key={iconData.imagePath} className={"col-md-1 " + classes.col}>
					<a href={iconData.href}>
						<img className={classes.socialIcon} src={STATIC_PATH_IMAGES + '/' + iconData.imagePath}  />
					</a>
				</div>
			))}
		</div>
  </div>

export default injectSheet(styles)(HomePage)
