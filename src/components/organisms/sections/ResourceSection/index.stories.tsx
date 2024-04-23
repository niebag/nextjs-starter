import type { Meta, StoryObj } from '@storybook/react';

import { ResourceSection } from '.';

/**
 * Meta information for the component.
 * This object configures how the component will be displayed in the Storybook interface.
 *
 * @see https://storybook.js.org/docs/writing-stories#default-export
 */
type ResourceSectionMeta = Meta<typeof ResourceSection>;

/**
 * Section with a list of resources.
 */
const meta = {
    component: ResourceSection,
    tags: ['autodocs'],
    title: 'Organisms/Sections/ResourceSection'
} satisfies ResourceSectionMeta;
export default meta;

/**
 * Type definition for the stories.
 * This type defines the expected structure for individual stories.
 *
 * @see https://storybook.js.org/docs/writing-stories#defining-stories
 */
type ResourceSectionStory = StoryObj<typeof meta>;

/* Stories */

/**
 * Default resource section.
 */
export const Default = {} satisfies ResourceSectionStory;
