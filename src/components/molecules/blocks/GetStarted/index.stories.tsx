import type { Meta, StoryObj } from '@storybook/react';

import { GetStarted } from '.';

const meta = {
	title: 'Molecules/Blocks/GetStarted',
	component: GetStarted
} satisfies Meta<typeof GetStarted>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
