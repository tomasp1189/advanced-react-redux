import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

let originalTimeout;
let wrapped;
let history;

//TODO: use Router from react router and create history and dispatch actions.
//TODO: Branch and revert last commit, try history push for navitgation
beforeEach(() => {
	// originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
	// jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
	moxios.install();
	moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
		status: 200,
		response: [
			{
				name: 'Fetched #1'
			},
			{
				name: 'Fetched #2'
			}
		]
	});
	history = createBrowserHistory();
	wrapped = mount(
		<Root
			initialState={{
				auth: true,
				comments: []
			}}
		>
			<Router history={history}>
				<App />
			</Router>
		</Root>
	);
});

afterEach(() => {
	// jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
	moxios.uninstall();
});

const wrappedDispatch = action =>
	wrapped
		.find(Provider)
		.props()
		.store.dispatch(action);

it('should fetch a list of comments and display them succesfully', done => {
	console.log(wrapped.html());
	history.push('/post');
	wrapped.update();
	console.log(wrapped.html());

	wrapped.find('.fetch-comments').simulate('click');
	moxios.wait(() => {
		wrapped.find('a#nav-link-home').simulate('click');
		wrapped.update();
		console.log(wrapped.html());
		history.push('/');
		wrapped.update();
		console.log(wrapped.html());
		expect(wrapped.find('li.comments').length).toEqual(2);
		done();
		wrapped.unmount();
	});
});
