/** @type {import('eslint').Linter.FlatConfig} */
import prettier from 'prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            globals: {
                console: 'writable',
                __dirname: 'readable',
                __filename: 'readable',
                process: 'readable',
            },
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            prettier: eslintPluginPrettier,
        },
        rules: {
            ...eslintConfigPrettier.rules, // Kết hợp các quy tắc của eslint-config-prettier
            'prettier/prettier': 'error',
        },
        settings: {
            prettier,
        },
    },
];
