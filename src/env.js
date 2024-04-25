// In favor of type safety, the usage of `process.env` is disabled through the `no-process-env` rule with ESLint.
// All references to `process.env` should be replaced with the `env` object created by the `@t3-oss/env-nextjs` package.
// This ensures that the environment variables are properly validated and that the code is type-safe.
// `no-process-env` is disabled in this file only to allow the usage of `process.env` for the `env` object creation.
/* eslint-disable n/no-process-env */

import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
    /**
     * Specify your client-side environment variables schema here. This way you can ensure the app
     * isn't built with invalid env vars. To expose them to the client, prefix them with
     * `NEXT_PUBLIC_`.
     */
    client: {
        // NEXT_PUBLIC_CLIENT_VAR: z.string(),
    },

    /**
     * Specify your server-side environment variables schema here. This way you can ensure the app
     * isn't built with invalid env vars.
     */
    server: {
        NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
        CI: z
            .enum(['true', 'false'])
            .transform((s) => s === 'true')
            .default('false')
    },

    /**
     * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
     * middlewares) or client-side so we need to destruct manually.
     */
    runtimeEnv: {
        /* Client */
        // NEXT_PUBLIC_CLIENT_VAR: process.env.NEXT_PUBLIC_CLIENT_VAR

        /* Server */
        NODE_ENV: process.env.NODE_ENV,
        CI: process.env.CI
    },

    /**
     * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
     * useful for Docker builds.
     */
    skipValidation: !!process.env.SKIP_ENV_VALIDATION,

    /**
     * Makes it so that empty strings are treated as undefined.
     * `SOME_VAR: z.string()` and `SOME_VAR=''` will throw an error.
     */
    emptyStringAsUndefined: true
});
