/** @type {import("eslint").Linter.Config} */
const config = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: true
    },
    plugins: ['@typescript-eslint', 'eslint-plugin-n'],
    extends: [
        'plugin:@next/next/recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:storybook/recommended'
    ],
    rules: {
        // These opinionated rules are enabled in stylistic-type-checked above.
        // Feel free to reconfigure them to your own preference.
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',

        '@typescript-eslint/consistent-type-imports': [
            'warn',
            {
                prefer: 'type-imports',
                fixStyle: 'inline-type-imports'
            }
        ],
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-misused-promises': [
            'error',
            {
                checksVoidReturn: { attributes: false }
            }
        ],

        // In favor of type safety, the usage of `process.env` will throw an error.
        // All references to `process.env` should be replaced with the `env` object created by
        // the `@t3-oss/env-nextjs` package, which can be found at `src/env.js`.
        // This ensures that the environment variables are properly validated and that the code is type-safe.
        'n/no-process-env': 'error'
    }
};

module.exports = config;
