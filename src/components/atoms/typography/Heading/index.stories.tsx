import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from '.';

const meta = {
	title: 'Atoms/Typography/Heading',
	component: Heading
} satisfies Meta<typeof Heading>;
export default meta;

type Story = StoryObj<typeof meta>;

export const H1 = {
	args: {
		children: 'Heading 1',
		level: 1
	}
} satisfies Story;

export const H2 = {
	args: {
		children: 'Heading 2',
		level: 2
	}
} satisfies Story;

export const H3 = {
	args: {
		children: 'Heading 3',
		level: 3
	}
} satisfies Story;

export const H4 = {
	args: {
		children: 'Heading 4',
		level: 4
	}
} satisfies Story;

export const H5 = {
	args: {
		children: 'Heading 5',
		level: 5
	}
} satisfies Story;

export const H6 = {
	args: {
		children: 'Heading 6',
		level: 6
	}
} satisfies Story;
