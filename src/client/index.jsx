// @flow

import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import ComingSoon from './comingSoon'
import { APP_CONTAINER_SELECTOR } from '../shared/config'

ReactDOM.render(<ComingSoon />, document.querySelector(APP_CONTAINER_SELECTOR))
