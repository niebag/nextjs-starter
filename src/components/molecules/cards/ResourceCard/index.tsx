import { ArrowIcon } from '~/components/atoms/icons/ArrowIcon';
import { Heading } from '~/components/atoms/typography/Heading';

/**
 * Props for the ArrowIcon component.
 */
type ResourceCardProps = {
    /** Title of the card */
    title: string;

    /** Description of the card */
    description: string;

    /** Link to the resource */
    link: string;
};

export function ResourceCard({ title, description, link }: ResourceCardProps) {
    /* JSX */

    return (
        <a
            href={link}
            className='group flex flex-col items-center justify-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
            target='_blank'
            rel='noopener noreferrer'>
            <Heading className='mb-3' level={2}>
                {title}{' '}
                <ArrowIcon
                    className='transition-transform group-hover:translate-x-1 motion-reduce:transform-none'
                    direction='right'
                />
            </Heading>
            <p className='m-0 max-w-[30ch] text-sm opacity-50'>{description}</p>
        </a>
    );
}
