import { cn } from '~/lib/utils';

describe('cn', () => {
    it('merges tailwind class names', () => {
        const classNames = cn('bg-red hover:bg-dark-red px-2 py-1', 'bg-[#b91c1c] p-3');
        const expectedClasses = ['hover:bg-dark-red', 'p-3', 'bg-[#b91c1c]'];

        expect(classNames.split(' ').sort()).toEqual(expectedClasses.sort());
        expect(classNames.split(' ').length).toBe(expectedClasses.length);
    });
});
