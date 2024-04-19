<p align="center">
  <a href="https://nextjs.org">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./public/next-light.svg">
      <img src="./public/next.svg" width="256">
    </picture>
    <br />
    <br />
    <h1 align="center">Next.js Starter</h1>
  </a>
</p>

<p align="center">
  Launch your projects quickly with this <a href="https://nextjs.org/">Next.js</a> starter kit, which includes a carefully selected suite of tools to enhance the development lifecycle.
</p>

<p align="center">
  <img src="https://github.com/niebag/nextjs-starter/actions/workflows/jest.yml/badge.svg" alt="Jest Tests">
  <img src="https://github.com/niebag/nextjs-starter/actions/workflows/playwright.yml/badge.svg" alt="Playwright Tests">
  <img src="https://github.com/niebag/nextjs-starter/actions/workflows/storybook.yml/badge.svg " alt="Storybook Test Runner">
  <br />
  <br />
</p>

## What is this repo?

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
This repository is equipped with a suite of opinionated tools to streamline the development, testing, and deployment phases of your application.

These tools are selected to enhance the foundational `create-next-app` setup. For example, the base homepage is broken down into components based on the Atomic Design method, and each of these components is represented in Storybook for easier development and testing. Read more about the included tools in the [Opinionated Tools Included](#opinionated-tools-included) section.

It's important to note that this setup does not include project-specific tooling such as authentication or database integration, as those choices depend heavily on the individual project requirements.

## Table Of Contents

<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

-   [Opinionated Tools Included](#opinionated-tools-included)
-   [Getting Started](#getting-started)
-   [Learn More](#learn-more)
-   [Deploy on Vercel](#deploy-on-vercel)

<!-- TOC end -->

## Opinionated Tools Included

-   **[PNPM](https://pnpm.io/)**: A fast, disk space-efficient package manager.
-   **[Turbopack](https://turbo.build/pack)** Provides a fast and flexible development experience for apps of any size using incremental behavior and adaptable bundling strategies.
-   **[Storybook](https://storybook.js.org/)**: Integrated directly into the project for building UI components in isolation.
-   **[Jest](https://jestjs.io/)**: Setup for unit and snapshot testing to ensure code reliability.
-   **[Playwright](https://playwright.dev/)**: Configured for end-to-end testing, providing automated testing capabilities across various browsers.
-   **[GitHub Actions](https://github.com/features/actions)**: Automated workflows for _Storybook_, _Jest_, and _Playwright_ to ensure that your builds are tested before deployment.
-   **[t3-env](https://env.t3.gg/)**: Validate and transform your environment variables with the full power of _[Zod](https://zod.dev/)_.
-   **[Plop](https://plopjs.com/)**: A micro-generator to help you maintain code standards and speed up repetitive tasks.
-   **[Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)**: Methodology included for organizing components effectively.
-   **[ESLint](https://eslint.org/)**: Linting rules to ensure code consistency and quality.
-   **[Prettier](https://prettier.io/)**: Code formatting rules to ensure code consistency and quality.
-   **Git Hooks (using [Husky](https://typicode.github.io/husky/))**: Ensures code standards and runs tests pre-commit and pre-push.
    -   **[Commitlint](https://commitlint.js.org/)**: Ensures commit messages meet the [conventional commits](https://www.conventionalcommits.org/) format.
    -   **[Lint-staged](https://www.npmjs.com/package/lint-staged)**: Lints and formats staged files before committing using the project's _ESLint_ and _Prettier_ rules.

## Getting Started

First, make sure your system has the [PNPM](https://pnpm.io/) package manager installed. If not, please refer to the [installation guide](https://pnpm.io/installation).

Then, clone this repository:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
