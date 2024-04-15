import { HeaderSection } from '~/components/organisms/sections/header-section';
import { LogoSection } from '~/components/organisms/sections/logo-section';
import { ResourceSection } from '~/components/organisms/sections/resource-section';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<HeaderSection />

			<LogoSection />

			<ResourceSection />
		</main>
	);
}
