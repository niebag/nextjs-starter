import { ArrowIcon } from '../../atoms/icons/arrow-icon';
import { Heading } from '../../atoms/typography/heading';

type Props = {
	title: string;
	description: string;
	link: string;
};

export function ResourceCard({ title, description, link }: Props) {
	return (
		<a
			href={link}
			className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
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
