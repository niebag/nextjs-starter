import type { Meta, StoryObj } from '@storybook/react';

import { LogoSection } from '.';

const meta = {
	title: 'Organisms/Sections/LogoSection',
	component: LogoSection
} satisfies Meta<typeof LogoSection>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
