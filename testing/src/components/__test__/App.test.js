import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Root from 'Root';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

const mountLoggedInWithRouter = routerIndex => {
	return mount(
		<Root initialState={{ auth: true }}>
			<MemoryRouter initialEntries={['/', '/post']} initialIndex={routerIndex}>
				<App />
			</MemoryRouter>
		</Root>
	);
};

it('should show a comment box', () => {
	const wrapped = mountLoggedInWithRouter(1);
	wrapped.update();
	expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('should show a comment list', () => {
	const wrapped = mountLoggedInWithRouter(0);
	wrapped.find('a#nav-link-home').simulate('click', { button: 0 });
	wrapped.update();
	expect(wrapped.find(CommentList).length).toEqual(1);
});
