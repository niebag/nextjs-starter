/**
 * Tailwind CSS breakpoints.
 *
 * @see https://tailwindcss.com/docs/responsive-design
 */
export const TAILWIND_VIEWPORTS = {
	sm: {
		name: 'Small (sm)',
		styles: {
			width: '640px',
			height: '100%'
		}
	},
	md: {
		name: 'Medium (md)',
		styles: {
			width: '768px',
			height: '100%'
		}
	},
	lg: {
		name: 'Large (lg)',
		styles: {
			width: '1024px',
			height: '100%'
		}
	},
	xl: {
		name: 'Extra Large (xl)',
		styles: {
			width: '1280px',
			height: '100%'
		}
	},
	'2xl': {
		name: '2X Large (2xl)',
		styles: {
			width: '1536px',
			height: '100%'
		}
	}
} as const;
