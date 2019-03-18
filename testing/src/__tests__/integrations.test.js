import React from 'react';
import { mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

let originalTimeout;
let wrapped;
let options;

beforeEach(() => {
	originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
	jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;

	options = new ReactRouterEnzymeContext();
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
		<Root initialState={{ auth: true }}>
			<App />
		</Root>,
		options.get()
	);
});

afterEach(() => {
	jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
	moxios.uninstall();
});

it('should fetch a list of comments and display them succesfully', done => {
	console.log(wrapped.html());
	// we need to sign in first
	//wrapped.find('.sign-in').simulate('click');
	// navigate to comment listv
	wrapped.update();
	//wrapped.find('a#nav-link-post').simulate('click');
	options.props().history.go('/post');
	wrapped.update();

	console.log(wrapped.html());

	wrapped.find('.fetch-comments').simulate('click');
	moxios.wait(() => {
		wrapped.find('a#nav-link-home').simulate('click');
		wrapped.update();
		console.log(wrapped.html());
		expect(wrapped.find('li').length).toEqual(2);
		done();
		wrapped.unmount();
	});
});
