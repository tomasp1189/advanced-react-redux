import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import Root from 'Root';
import App from 'components/App';

ReactDOM.render(
	<Root shouldLog>
		<Route path="/" component={App} />
	</Root>,
	document.querySelector('#root')
);
