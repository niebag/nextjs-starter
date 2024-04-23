import Image, { type ImageProps } from 'next/image';

import { cn } from '~/lib/utils';

/**
 * Props for the VercelLogo component.
 *
 * We use Omit to create a new type that has all the properties of ImageProps
 * except for 'src' and 'alt'. This is because we're setting 'src' and 'alt'
 * directly in the VercelLogo component, so we don't want TypeScript to require
 * them when we use the VercelLogo component.
 */
type VercelLogoProps = Omit<ImageProps, 'src' | 'alt'>;

export function VercelLogo({ className, ...props }: VercelLogoProps) {
    /* JSX */

    return <Image {...props} src='/vercel.svg' alt='Vercel Logo' className={cn('dark:invert', className)} />;
}
