import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Root from 'Root';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

const mountLoggedInWithRouter = route => {
	return mount(
		<Root
			initialState={{
				auth: true,
				comments: []
			}}
		>
			<MemoryRouter initialEntries={[route]}>
				<App />
			</MemoryRouter>
		</Root>
	);
};

afterEach(() => {
	wrapped.unmount();
});

it('should show a comment box', () => {
	wrapped = mountLoggedInWithRouter('/post');
	wrapped.update();
	expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('should show a comment list', () => {
	wrapped = mountLoggedInWithRouter('/');
	wrapped.find('a#nav-link-home').simulate('click', { button: 0 });
	wrapped.update();
	expect(wrapped.find(CommentList).length).toEqual(1);
});
