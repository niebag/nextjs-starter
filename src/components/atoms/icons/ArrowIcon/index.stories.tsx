import type { Meta, StoryObj } from '@storybook/react';

import { ArrowIcon } from '.';

/**
 * Meta information for the component.
 * This object configures how the component will be displayed in the Storybook interface.
 *
 * @see https://storybook.js.org/docs/writing-stories#default-export
 */
type ArrowIconMeta = Meta<typeof ArrowIcon>;

/**
 * Arrow icon that can point to the left or right.
 */
const meta = {
    component: ArrowIcon,
    tags: ['autodocs'],
    title: 'Atoms/Icons/ArrowIcon'
} satisfies ArrowIconMeta;
export default meta;

/**
 * Type definition for the stories.
 * This type defines the expected structure for individual stories.
 *
 * @see https://storybook.js.org/docs/writing-stories#defining-stories
 */
type ArrowIconStory = StoryObj<typeof meta>;

/* Stories */

/**
 * Arrow icon that points to the left.
 */
export const LeftDirection = {
    args: {
        direction: 'left'
    }
} satisfies ArrowIconStory;

/**
 * Arrow icon that points to the right.
 */
export const RightDirection = {
    args: {
        direction: 'right'
    }
} satisfies ArrowIconStory;
