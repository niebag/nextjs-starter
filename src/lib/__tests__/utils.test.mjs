import { cn } from '~/lib/utils';

describe('cn', () => {
	it('merges tailwind classes', () => {
		const classNames = cn('bg-red hover:bg-dark-red px-2 py-1', 'bg-[#b91c1c] p-3');

		expect(classNames).toEqual(expect.stringContaining('hover:bg-dark-red p-3 bg-[#b91c1c]'));
	});
});
