import type { Meta, StoryObj } from '@storybook/react';

import { NextJSLogo } from '.';

/**
 * Meta information for the component.
 * This object configures how the component will be displayed in the Storybook interface.
 *
 * @see https://storybook.js.org/docs/writing-stories#default-export
 */
type NextJSLogoMeta = Meta<typeof NextJSLogo>;

/**
 * The Next.js logo
 */
const meta = {
    component: NextJSLogo,
    tags: ['autodocs'],
    title: 'Atoms/Logos/NextJSLogo'
} satisfies NextJSLogoMeta;
export default meta;

/**
 * Type definition for the stories.
 * This type defines the expected structure for individual stories.
 *
 * @see https://storybook.js.org/docs/writing-stories#defining-stories
 */
type NextJSLogoStory = StoryObj<typeof meta>;

/**
 * The default Next.js logo.
 */
export const Default = {
    args: {
        width: 180,
        height: 37
    }
} satisfies NextJSLogoStory;
