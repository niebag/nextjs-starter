import type { Meta, StoryObj } from '@storybook/react';

import { LogoSection } from '.';

/**
 * Meta information for the component.
 * This object configures how the component will be displayed in the Storybook interface.
 *
 * @see https://storybook.js.org/docs/writing-stories#default-export
 */
type LogoSectionMeta = Meta<typeof LogoSection>;

/**
 * Section with a centered Next.js logo.
 */
const meta = {
    component: LogoSection,
    tags: ['autodocs'],
    title: 'Organisms/Sections/LogoSection'
} satisfies LogoSectionMeta;
export default meta;

/**
 * Type definition for the stories.
 * This type defines the expected structure for individual stories.
 *
 * @see https://storybook.js.org/docs/writing-stories#defining-stories
 */
type LogoSectionStory = StoryObj<typeof meta>;

/* Stories */

/**
 * Default logo section.
 */
export const Default = {} satisfies LogoSectionStory;
