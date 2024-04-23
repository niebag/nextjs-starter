import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

import { cn } from '~/lib/utils';

const headingVariants = cva('font-semibold', {
    variants: {
        level: {
            1: 'text-3xl',
            2: 'text-2xl',
            3: 'text-xl',
            4: 'text-lg',
            5: 'text-base',
            6: 'text-sm'
        }
    }
});

/**
 * Props for the Heading component.
 */
type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof headingVariants>;

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({ className, level = 1, ...props }, ref) => {
    /* JSX */

    switch (level) {
        case 1:
            return <h1 ref={ref} className={cn(headingVariants({ level }), className)} {...props} />;
        case 2:
            return <h2 ref={ref} className={cn(headingVariants({ level }), className)} {...props} />;
        case 3:
            return <h3 ref={ref} className={cn(headingVariants({ level }), className)} {...props} />;
        case 4:
            return <h4 ref={ref} className={cn(headingVariants({ level }), className)} {...props} />;
        case 5:
            return <h5 ref={ref} className={cn(headingVariants({ level }), className)} {...props} />;
        case 6:
            return <h6 ref={ref} className={cn(headingVariants({ level }), className)} {...props} />;
    }
});
Heading.displayName = 'Heading';
