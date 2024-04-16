import type { Meta, StoryObj } from '@storybook/react';

import { NextJSLogo } from '.';

const meta = {
	title: 'Atoms/Logos/NextJSLogo',
	component: NextJSLogo
} satisfies Meta<typeof NextJSLogo>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
	args: {
		width: 180,
		height: 37
	}
} satisfies Story;
