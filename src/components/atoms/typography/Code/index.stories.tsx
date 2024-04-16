import type { Meta, StoryObj } from '@storybook/react';

import { Code } from '.';

const meta = {
	title: 'Atoms/Typography/Code',
	component: Code
} satisfies Meta<typeof Code>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
	args: {
		children: 'src/app/page.tsx'
	}
} satisfies Story;
