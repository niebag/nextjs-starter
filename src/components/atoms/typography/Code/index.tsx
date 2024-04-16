import * as React from 'react';

import { cn } from '~/lib/utils';

type Props = React.HTMLAttributes<HTMLElement>;

export const Code = React.forwardRef<HTMLElement, Props>(({ className, ...props }, ref) => {
	return <code ref={ref} className={cn('font-mono', className)} {...props} />;
});

Code.displayName = 'Code';
