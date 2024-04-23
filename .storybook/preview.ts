import type { Preview } from '@storybook/react';

import '~/styles/tailwind.css';
import { TAILWIND_VIEWPORTS } from './constants';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		docs: {
			toc: true
		},
		viewport: {
			viewports: TAILWIND_VIEWPORTS
		}
	}
};

export default preview;
