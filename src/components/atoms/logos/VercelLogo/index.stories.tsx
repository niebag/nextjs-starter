import type { Meta, StoryObj } from '@storybook/react';

import { VercelLogo } from '.';

/**
 * Meta information for the component.
 * This object configures how the component will be displayed in the Storybook interface.
 *
 * @see https://storybook.js.org/docs/writing-stories#default-export
 */
type VercelLogoMeta = Meta<typeof VercelLogo>;

/**
 * The Vercel logo
 */
const meta = {
    component: VercelLogo,
    tags: ['autodocs'],
    title: 'Atoms/Logos/VercelLogo'
} satisfies VercelLogoMeta;
export default meta;

/**
 * Type definition for the stories.
 * This type defines the expected structure for individual stories.
 *
 * @see https://storybook.js.org/docs/writing-stories#defining-stories
 */
type VercelLogoStory = StoryObj<typeof meta>;

/* Stories */

/**
 * The default Vercel logo.
 */
export const Default = {
    args: {
        width: 100,
        height: 24
    }
} satisfies VercelLogoStory;
