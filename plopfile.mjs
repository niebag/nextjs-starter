/**
 * @param {import('plop').NodePlopAPI} plop - Plop provides the API methods for plop actions
 */
export default function (plop) {
	plop.setGenerator('component', {
		description: 'Create a new component according to the Atomic Design methodology',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is your component name?'
			},
			{
				type: 'list',
				name: 'type',
				message: 'What is your component type? ',
				choices: ['atoms', 'molecules', 'organisms']
			},
			{
				type: 'input',
				name: 'subType',
				message: `What is your component sub-type? (e.g. 'typography' for atoms, 'cards' for molecules or 'sections' for organisms)`
			},
			{
				type: 'confirm',
				name: 'confirmation',
				message: (answers) => {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
					const pascalCaseName = answers.name
						// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
						.replace(/(^\w|-\w|\s\w|_\w)/g, (/** @type {string} */ s) => s.toUpperCase())
						// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
						.replace(/[-_\s]+/g, '');

					return `Are you sure you want to create '~/components/${answers.type}/${answers.subType}/${pascalCaseName}'?`;
				}
			}
		],
		actions: [
			{
				type: 'add',
				path: 'src/components/{{type}}/{{subType}}/{{pascalCase name}}/index.stories.tsx',
				templateFile: '.plop-templates/component/index.stories.tsx.hbs'
			},
			{
				type: 'add',
				path: 'src/components/{{type}}/{{subType}}/{{pascalCase name}}/index.tsx',
				templateFile: '.plop-templates/component/index.tsx.hbs'
			}
		]
	});
}
