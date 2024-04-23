import type { Meta, StoryObj } from '@storybook/react';

import { ScreenSize } from '.';

/**
 * Meta information for the component.
 * This object configures how the component will be displayed in the Storybook interface.
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#default-export
 */
type ScreenSizeMeta = Meta<typeof ScreenSize>;

/**
 * Screen size utility component for the development environment.
 * This components displays the current screen size with its corresponding Tailwind CSS breakpoint.
 */
const meta = {
    component: ScreenSize,
    tags: ['autodocs'],
    title: 'Atoms/Utils/ScreenSize'
} satisfies ScreenSizeMeta;
export default meta;

/**
 * Type definition for the stories.
 * This type defines the expected structure for individual stories.
 *
 * @see https://storybook.js.org/docs/writing-stories#defining-stories
 */
type ScreenSizeStory = StoryObj<typeof meta>;

/* Stories */

/**
 * Responsive screen size.
 */
export const Responsive: ScreenSizeStory = {
    parameters: {
        viewport: { defaultViewport: 'responsive' }
    }
};

/**
 * Small screen size. Minimum width: 640px
 */
export const SM: ScreenSizeStory = {
    parameters: {
        viewport: { defaultViewport: 'sm' }
    }
};

/**
 * Medium screen size. Minimum width: 768px
 */
export const MD: ScreenSizeStory = {
    parameters: {
        viewport: { defaultViewport: 'md' }
    }
};

/**
 * Large screen size. Minimum width: 1024px
 */
export const LG: ScreenSizeStory = {
    parameters: {
        viewport: { defaultViewport: 'lg' }
    }
};

/**
 * Extra large screen size. Minimum width: 1280px
 */
export const XL: ScreenSizeStory = {
    parameters: {
        viewport: { defaultViewport: 'xl' }
    }
};

/**
 * Extra extra large screen size. Minimum width: 1536px
 */
export const XXL: ScreenSizeStory = {
    parameters: {
        viewport: { defaultViewport: '2xl' }
    }
};
