import type { Meta, StoryObj } from '@storybook/react';

import { CreatorCredit } from '.';

const meta = {
	title: 'Molecules/Blocks/CreatorCredit',
	component: CreatorCredit
} satisfies Meta<typeof CreatorCredit>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
