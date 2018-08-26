import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
	const state = {
		comments: ['Comment 1', 'Comment 2']
	};

	wrapped = mount(
		<Root initialState={state}>
			<CommentList />
		</Root>
	);
});

afterEach(() => {
	wrapped.unmount();
});

it('creates one LI per comment', () => {
	expect(wrapped.find('li')).toHaveLength(2);
});

it('shows the text for each comment', () => {
	expect(wrapped.render().text()).toContain('Comment 1');
	expect(wrapped.render().text()).toContain('Comment 2');
});