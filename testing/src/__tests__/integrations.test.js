import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';
import { push } from 'connected-react-router';

let originalTimeout;
let wrapped;
let options;

beforeEach(() => {
	originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
	jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
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
	wrapped = mount(
		<Root
			initialState={{
				auth: true,
				router: {
					location: {
						pathname: '/',
						search: '',
						hash: '',
						state: undefined,
						key: 'st0b6u'
					},
					action: 'PUSH'
				},
				comments: []
			}}
		>
			<App />
		</Root>
	);
});

afterEach(() => {
	jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
	moxios.uninstall();
});

const wrappedDispatch = action =>
	wrapped
		.find(Provider)
		.props()
		.store.dispatch(action);

it('should fetch a list of comments and display them succesfully', done => {
	console.log(wrapped.html());
	// we need to sign in first
	//wrapped.find('.sign-in').simulate('click');
	// navigate to comment listv
	//wrapped.find('a#nav-link-post').simulate('click');
	wrappedDispatch(push('/post'));
	wrapped.update();
	console.log(wrapped.html());

	wrapped.find('.fetch-comments').simulate('click');
	moxios.wait(() => {
		wrapped.find('a#nav-link-home').simulate('click');
		wrapped.update();
		console.log(wrapped.html());
		wrappedDispatch(push('/'));
		wrapped.update();
		console.log(wrapped.html());
		expect(wrapped.find('li.comments').length).toEqual(2);
		done();
		wrapped.unmount();
	});
});
