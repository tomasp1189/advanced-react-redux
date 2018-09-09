import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import App from 'components/App';

ReactDOM.render(
	<Root shouldLog>
		<App />
	</Root>,
	document.querySelector('#root')
);
