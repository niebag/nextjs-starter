import { forwardRef } from 'react';

import { cn } from '~/lib/utils';

/**
 * Props for the ArrowIcon component.
 */
type CodeProps = React.HTMLAttributes<HTMLElement>;

export const Code = forwardRef<HTMLElement, CodeProps>(({ className, ...props }, ref) => {
    /* JSX */

    return <code ref={ref} className={cn('font-mono', className)} {...props} />;
});
Code.displayName = 'Code';
