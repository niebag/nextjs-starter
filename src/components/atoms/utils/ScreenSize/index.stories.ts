import type { Meta, StoryObj } from '@storybook/react';
import { ScreenSize } from '.';

const meta: Meta<typeof ScreenSize> = {
	title: 'Atoms/Utils/ScreenSize',
	component: ScreenSize
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Responsive: Story = {
	parameters: {
		viewport: { defaultViewport: 'responsive' }
	}
};

export const SM: Story = {
	parameters: {
		viewport: { defaultViewport: 'sm' }
	}
};

export const MD: Story = {
	parameters: {
		viewport: { defaultViewport: 'md' }
	}
};

export const LG: Story = {
	parameters: {
		viewport: { defaultViewport: 'lg' }
	}
};

export const XL: Story = {
	parameters: {
		viewport: { defaultViewport: 'xl' }
	}
};

export const XXL: Story = {
	parameters: {
		viewport: { defaultViewport: '2xl' }
	}
};
