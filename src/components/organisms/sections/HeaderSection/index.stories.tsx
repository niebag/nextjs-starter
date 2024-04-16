import type { Meta, StoryObj } from '@storybook/react';

import { HeaderSection } from '.';

const meta = {
	title: 'Organisms/Sections/HeaderSection',
	component: HeaderSection
} satisfies Meta<typeof HeaderSection>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
