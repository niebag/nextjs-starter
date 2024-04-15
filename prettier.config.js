/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
	/* Base config */
	plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],

	/* Formatting rules */
	tabWidth: 4, // Specify the number of spaces per indentation-level.
	useTabs: true, // Indent lines with tabs instead of spaces
	semi: true, // Print semicolons at the ends of statements.
	singleQuote: true, // Use single quotes instead of double quotes.
	jsxSingleQuote: true, // Use single quotes in JSX.
	trailingComma: 'none', // Print trailing commas wherever possible.
	bracketSpacing: true, // Print spaces between brackets in object literals.
	bracketSameLine: true, // Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line.
	printWidth: 120, // Specify the line length that the printer will wrap on.

	/* Config for prettier-plugin-tailwindcss */
	tailwindConfig: './tailwind.config.ts', // Path to the Tailwind config file.
	tailwindFunctions: ['cn', 'cva'] // List of custom function and tag names that contain classes.
};

export default config;
