import { VercelLogo } from '~/components/atoms/logos/VercelLogo';

export function CreatorCredit() {
    /* JSX */

    return (
        <a
            data-testid='creator-credit'
            className='flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
            href='https://vercel.com'
            target='_blank'
            rel='noopener noreferrer'>
            By <VercelLogo width={100} height={24} priority />
        </a>
    );
}
