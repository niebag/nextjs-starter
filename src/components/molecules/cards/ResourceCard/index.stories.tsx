import type { Meta, StoryObj } from '@storybook/react';

import { ResourceCard } from '.';

const meta = {
	title: 'Molecules/Cards/ResourceCard',
	component: ResourceCard
} satisfies Meta<typeof ResourceCard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
	args: {
		title: 'Docs',
		description: 'Find in-depth information about Next.js features and API.',
		link: 'https://nextjs.org/docs'
	}
} satisfies Story;

export const Hover = {
	args: {
		title: 'Docs',
		description: 'Find in-depth information about Next.js features and API.',
		link: 'https://nextjs.org/docs'
	},
	parameters: {
		pseudo: {
			hover: true
		}
	}
} satisfies Story;
