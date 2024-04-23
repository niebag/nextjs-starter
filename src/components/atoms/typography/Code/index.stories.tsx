import type { Meta, StoryObj } from '@storybook/react';

import { Code } from '.';

/**
 * Meta information for the component.
 * This object configures how the component will be displayed in the Storybook interface.
 *
 * @see https://storybook.js.org/docs/writing-stories#default-export
 */
type CodeMeta = Meta<typeof Code>;

/**
 * Code block for displaying code snippets.
 */
const meta = {
    component: Code,
    tags: ['autodocs'],
    title: 'Atoms/Typography/Code'
} satisfies CodeMeta;
export default meta;

/**
 * Type definition for the stories.
 * This type defines the expected structure for individual stories.
 *
 * @see https://storybook.js.org/docs/writing-stories#defining-stories
 */
type CodeStory = StoryObj<typeof meta>;

/* Stories */

/**
 * Default code block.
 */
export const Default = {
    args: {
        children: 'src/app/page.tsx'
    }
} satisfies CodeStory;
