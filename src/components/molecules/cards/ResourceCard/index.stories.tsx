import type { Meta, StoryObj } from '@storybook/react';

import { ResourceCard } from '.';

/**
 * Meta information for the component.
 * This object configures how the component will be displayed in the Storybook interface.
 *
 * @see https://storybook.js.org/docs/writing-stories#default-export
 */
type ResourceCardMeta = Meta<typeof ResourceCard>;

/**
 * Displays a resource card with a title, description, and link.
 */
const meta = {
    component: ResourceCard,
    tags: ['autodocs'],
    title: 'Molecules/Cards/ResourceCard'
} satisfies ResourceCardMeta;
export default meta;

/**
 * Type definition for the stories.
 * This type defines the expected structure for individual stories.
 *
 * @see https://storybook.js.org/docs/writing-stories#defining-stories
 */
type ResourceCardStory = StoryObj<typeof meta>;

/* Stories */

/**
 * Default resource card.
 */
export const Default = {
    args: {
        title: 'Docs',
        description: 'Find in-depth information about Next.js features and API.',
        link: 'https://nextjs.org/docs'
    }
} satisfies ResourceCardStory;

/**
 * Resource card with hover state.
 */
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
} satisfies ResourceCardStory;
