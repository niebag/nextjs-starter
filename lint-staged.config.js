import path from 'path';

/** @type {import("lint-staged").ConfigFn} */
function lint(filenames) {
    return `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;
}

/** @type {import("lint-staged").ConfigFn} */
function prettier(filenames) {
    return `prettier --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;
}

const config = {
    '*.{ts,tsx,cjs,js,mjs}': [lint, prettier]
};

export default config;
