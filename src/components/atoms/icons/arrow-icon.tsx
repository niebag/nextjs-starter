import * as React from 'react';
import { cn } from '~/lib/utils';

type Direction = 'left' | 'right';
type Props = React.HTMLAttributes<HTMLSpanElement> & {
	direction: Direction;
};

export function ArrowIcon({ direction, className, ...props }: Props) {
	const arrow = direction === 'left' ? '<-' : '->';

	return (
		<span className={cn('inline-block', className)} {...props}>
			{arrow}
		</span>
	);
}
