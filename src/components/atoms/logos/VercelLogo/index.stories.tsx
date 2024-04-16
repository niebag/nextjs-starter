import type { Meta, StoryObj } from '@storybook/react';

import { VercelLogo } from '.';

const meta = {
	title: 'Atoms/Logos/VercelLogo',
	component: VercelLogo
} satisfies Meta<typeof VercelLogo>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
	args: {
		width: 100,
		height: 24
	}
} satisfies Story;
