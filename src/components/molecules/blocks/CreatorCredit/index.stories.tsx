import type { Meta, StoryObj } from '@storybook/react';

import { CreatorCredit } from '.';

/**
 * Meta information for the component.
 * This object configures how the component will be displayed in the Storybook interface.
 *
 * @see https://storybook.js.org/docs/writing-stories#default-export
 */
type CreatorCreditMeta = Meta<typeof CreatorCredit>;

/**
 * Displays the creator credit for the content.
 */
const meta = {
    component: CreatorCredit,
    tags: ['autodocs'],
    title: 'Molecules/Blocks/CreatorCredit'
} satisfies CreatorCreditMeta;
export default meta;

/**
 * Type definition for the stories.
 * This type defines the expected structure for individual stories.
 *
 * @see https://storybook.js.org/docs/writing-stories#defining-stories
 */
type CreatorCreditStory = StoryObj<typeof meta>;

/* Stories */

/**
 * Default creator credit.
 */
export const Default = {} satisfies CreatorCreditStory;
