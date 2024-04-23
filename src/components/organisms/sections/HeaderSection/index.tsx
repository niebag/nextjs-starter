import { CreatorCredit } from '~/components/molecules/blocks/CreatorCredit';
import { GetStarted } from '~/components/molecules/blocks/GetStarted';

export function HeaderSection() {
    /* JSX */

    return (
        <header className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
            <GetStarted />

            <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none dark:from-black dark:via-black'>
                <CreatorCredit />
            </div>
        </header>
    );
}
