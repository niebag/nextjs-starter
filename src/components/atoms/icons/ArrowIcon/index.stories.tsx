import type { Meta, StoryObj } from '@storybook/react';

import { ArrowIcon } from '.';

const meta = {
	title: 'Atoms/Icons/ArrowIcon',
	component: ArrowIcon
} satisfies Meta<typeof ArrowIcon>;
export default meta;

type Story = StoryObj<typeof meta>;

export const LeftDirection = {
	args: {
		direction: 'left'
	}
} satisfies Story;

export const RightDirection = {
	args: {
		direction: 'right'
	}
} satisfies Story;
