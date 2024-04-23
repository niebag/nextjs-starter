import { ResourceCard } from '../../../molecules/cards/ResourceCard';

export function ResourceSection() {
    /* JSX */

    return (
        <section className='mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left'>
            <ResourceCard
                title='Docs'
                description='Find in-depth information about Next.js features and API.'
                link='https://nextjs.org/docs'
            />

            <ResourceCard
                title='Learn'
                description='Learn about Next.js in an interactive course with quizzes!'
                link='https://nextjs.org/learn'
            />

            <ResourceCard
                title='Templates'
                description='Explore starter templates for Next.js.'
                link='https://vercel.com/templates?framework=next.js'
            />

            <ResourceCard
                title='Deploy'
                description='Instantly deploy your Next.js site to a shareable URL with Vercel.'
                link='https://vercel.com/new'
            />
        </section>
    );
}
