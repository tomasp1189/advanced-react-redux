import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

let wrapped;

beforeEach(() => {
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
		<Root>
			<MemoryRouter>
				<App />
			</MemoryRouter>
		</Root>
	);
});

afterEach(() => {
	moxios.uninstall();
});

it('should fetch a list of comments and display them succesfully', done => {
	// we need to sign in first
	wrapped.find('.sign-in').simulate('click');
	// navigate to comment list
	wrapped.find('a.nav-link-post').simulate('click');

	//console.log(wrapped.find('a.nav-link-post').html());

	wrapped.find('.fetch-comments').simulate('click');

	moxios.wait(() => {
		wrapped.update();
		expect(wrapped.find('li').length).toEqual(2);
		done();
		wrapped.unmount();
	});
});
