import type { Meta, StoryObj } from '@storybook/react';

import { HeaderSection } from '.';

/**
 * Meta information for the component.
 * This object configures how the component will be displayed in the Storybook interface.
 *
 * @see https://storybook.js.org/docs/writing-stories#default-export
 */
type HeaderSectionMeta = Meta<typeof HeaderSection>;

/**
 * Header section with a get started block and a creator credit block.
 */
const meta = {
    component: HeaderSection,
    tags: ['autodocs'],
    title: 'Organisms/Sections/HeaderSection'
} satisfies HeaderSectionMeta;
export default meta;

/**
 * Type definition for the stories.
 * This type defines the expected structure for individual stories.
 *
 * @see https://storybook.js.org/docs/writing-stories#defining-stories
 */
type HeaderSectionStory = StoryObj<typeof meta>;

/* Stories */

/**
 * Default header section.
 */
export const Default = {} satisfies HeaderSectionStory;
