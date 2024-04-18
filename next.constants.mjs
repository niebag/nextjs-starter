'use strict';

import { env } from '~/env';

/**
 * This is used to verify if the current site is running on a development environment.
 */
export const IS_DEVELOPMENT = env.NODE_ENV === 'development';
