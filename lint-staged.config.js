import path from 'path';

/** @type {import("lint-staged").ConfigFn} */
function lint(filenames) {
	// If there are more than 10 staged files, run the linter over the whole project
	if (filenames.length > 10) return 'next lint --fix';

	// Otherwise, run the linter over each file individually
	return `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;
}

/** @type {import("lint-staged").ConfigFn} */
function prettier(filenames) {
	// If there are more than 10 staged files, run prettier over the whole project
	if (filenames.length > 10) return 'prettier --write';

	// Otherwise, run prettier over each file individually
	return `prettier --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;
}

const config = {
	'*.{ts,tsx,cjs,js}': [lint, prettier]
};

export default config;
