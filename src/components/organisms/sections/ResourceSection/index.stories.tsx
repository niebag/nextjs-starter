import type { Meta, StoryObj } from '@storybook/react';

import { ResourceSection } from '.';

const meta = {
	title: 'Organisms/Sections/ResourceSection',
	component: ResourceSection
} satisfies Meta<typeof ResourceSection>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
