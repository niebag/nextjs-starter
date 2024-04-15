import { VercelLogo } from '~/components/atoms/logos/vercel-logo';

export function CreatorCredit() {
	return (
		<a
			className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
			href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
			target='_blank'
			rel='noopener noreferrer'>
			By <VercelLogo width={100} height={24} priority />
		</a>
	);
}
