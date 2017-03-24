import 'babel-polyfill'

import { APP_CONTAINER_SELECTOR } from '../shared/config'

document.querySelector(APP_CONTAINER_SELECTOR).innerHTML =
	`<div  class=".comingSoonContainer">
		<div class='comingSoon'>Coming Soon!</div>
	</div>`
