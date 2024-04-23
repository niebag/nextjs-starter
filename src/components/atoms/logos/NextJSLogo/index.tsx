import Image, { type ImageProps } from 'next/image';

import { cn } from '~/lib/utils';

/**
 * Props for the NextJSLogo component.
 *
 * We use Omit to create a new type that has all the properties of ImageProps
 * except for 'src' and 'alt'. This is because we're setting 'src' and 'alt'
 * directly in the NextJSLogo component, so we don't want TypeScript to require
 * them when we use the NextJSLogo component.
 */
type NextJSLogoProps = Omit<ImageProps, 'src' | 'alt'>;

export function NextJSLogo({ className, ...props }: NextJSLogoProps) {
    return (
        <Image
            {...props}
            src='/next.svg'
            alt='Next.js Logo'
            className={cn('dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert', className)}
        />
    );
}
