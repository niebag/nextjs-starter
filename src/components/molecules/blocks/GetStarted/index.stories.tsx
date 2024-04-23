import type { Meta, StoryObj } from '@storybook/react';

import { GetStarted } from '.';

/**
 * Meta information for the component.
 * This object configures how the component will be displayed in the Storybook interface.
 *
 * @see https://storybook.js.org/docs/writing-stories#default-export
 */
type GetStartedMeta = Meta<typeof GetStarted>;

/**
 * Get started block for the development environment.
 * This component displays a call-to-action block to help users get started with the application.
 */
const meta = {
    component: GetStarted,
    tags: ['autodocs'],
    title: 'Molecules/Blocks/GetStarted'
} satisfies GetStartedMeta;
export default meta;

/**
 * Type definition for the stories.
 * This type defines the expected structure for individual stories.
 *
 * @see https://storybook.js.org/docs/writing-stories#defining-stories
 */
type GetStartedStory = StoryObj<typeof meta>;

/* Stories */

/**
 * Default get started block.
 */
export const Default = {} satisfies GetStartedStory;
