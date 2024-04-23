import { cn } from '~/lib/utils';

type Direction = 'left' | 'right';

/**
 * Props for the ArrowIcon component.
 */
type ArrowIconProps = React.HTMLAttributes<HTMLSpanElement> & {
    /** Direction of which the arrow should point to. */
    direction: Direction;
};

export function ArrowIcon({ direction, className, ...props }: ArrowIconProps) {
    /* Constants */

    const arrow = direction === 'left' ? '<-' : '->';

    /* JSX */

    return (
        <span data-testid='arrow-icon' className={cn('inline-block', className)} {...props}>
            {arrow}
        </span>
    );
}
