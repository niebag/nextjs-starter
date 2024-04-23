import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from '.';

/**
 * Meta information for the component.
 * This object configures how the component will be displayed in the Storybook interface.
 *
 * @see https://storybook.js.org/docs/writing-stories#default-export
 */
type HeadingMeta = Meta<typeof Heading>;

/**
 * Heading 1 (h1) to heading 6 (h6) elements.
 */
const meta = {
    component: Heading,
    tags: ['autodocs'],
    title: 'Atoms/Typography/Heading'
} satisfies HeadingMeta;
export default meta;

/**
 * Type definition for the stories.
 * This type defines the expected structure for individual stories.
 *
 * @see https://storybook.js.org/docs/writing-stories#defining-stories
 */
type HeadingStory = StoryObj<typeof meta>;

/* Stories */

/**
 * Heading 1 (h1) element.
 */
export const H1 = {
    args: {
        children: 'Heading 1',
        level: 1
    }
} satisfies HeadingStory;

/**
 * Heading 2 (h2) element.
 */
export const H2 = {
    args: {
        children: 'Heading 2',
        level: 2
    }
} satisfies HeadingStory;

/**
 * Heading 3 (h3) element.
 */
export const H3 = {
    args: {
        children: 'Heading 3',
        level: 3
    }
} satisfies HeadingStory;

/**
 * Heading 4 (h4) element.
 */
export const H4 = {
    args: {
        children: 'Heading 4',
        level: 4
    }
} satisfies HeadingStory;

/**
 * Heading 5 (h5) element.
 */
export const H5 = {
    args: {
        children: 'Heading 5',
        level: 5
    }
} satisfies HeadingStory;

/**
 * Heading 6 (h6) element.
 */
export const H6 = {
    args: {
        children: 'Heading 6',
        level: 6
    }
} satisfies HeadingStory;
