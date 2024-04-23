import { HeaderSection } from '~/components/organisms/sections/HeaderSection';
import { LogoSection } from '~/components/organisms/sections/LogoSection';
import { ResourceSection } from '~/components/organisms/sections/ResourceSection';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <HeaderSection />

            <LogoSection />

            <ResourceSection />
        </main>
    );
}
