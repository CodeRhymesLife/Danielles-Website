// @flow

import { STATIC_PATH } from '../shared/config'

const renderApp = (title: string) =>
`<!doctype html>
<html>
  <head>
    <title>${title}</title>
    <link rel="stylesheet" href="${STATIC_PATH}/css/style.css">
  </head>
  <body>
  	<div  class=".comingSoonContainer">
  		<div class='comingSoon'>Coming Soon!</div>
  	</div>
  </body>
</html>
`

export default renderApp