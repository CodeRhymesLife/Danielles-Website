import 'babel-polyfill';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const App = props => (
  <div>
    {props.message}
  </div>
);

App.propTypes = {
  message: PropTypes.string.isRequired,
};

const comingSoonMessage = 'Coming Soon.';
ReactDOM.render(<App message={comingSoonMessage} />, document.querySelector('.app'));
