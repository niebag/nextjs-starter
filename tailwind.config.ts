import type { Config } from 'tailwindcss';

const config: Config = {
	/**
	 * Configure the paths to all of your HTML templates, JS components, and any other files that contain Tailwind class names.
	 * @see https://tailwindcss.com/docs/content-configuration
	 */
	content: ['./src/**/*.tsx'],

	/**
	 * Define your project’s color palette, type scale, fonts, breakpoints, border radius values, and more.
	 */
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		}
	}
};

export default config;
