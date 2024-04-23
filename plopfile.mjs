/**
 * @param {import('plop').NodePlopAPI} plop
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
                name: 'subFolder',
                message: (answers) => {
                    switch (answers.type) {
                        case 'atoms':
                            return 'Name your subfolder (e.g. interactive, typography, etc.)';
                        case 'molecules':
                            return 'Name your subfolder (e.g. forms, cards, etc.)';
                        case 'organisms':
                            return 'Name your subfolder (e.g. headers, footers, sections etc.)';
                        default:
                            return 'Name your subfolder';
                    }
                }
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

                    return `Are you sure you want to create '~/components/${answers.type}/${answers.subFolder}/${pascalCaseName}'?`;
                }
            }
        ],
        actions: [
            {
                type: 'addMany',
                destination: 'src/components/{{type}}/{{subFolder}}/{{pascalCase name}}',
                base: '.plop-templates/component',
                templateFiles: '.plop-templates/component/*.hbs'
            }
        ]
    });
}
