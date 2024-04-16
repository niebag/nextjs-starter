import { cn } from "~/lib/utils";

describe("cn", () => {
    it('merges tailwind classes', () => {
        const classNames = cn('px-2 py-1 bg-red hover:bg-dark-red', 'p-3 bg-[#b91c1c]');

        expect(classNames).toBe('hover:bg-dark-red p-3 bg-[#b91c1c]');
    });
});