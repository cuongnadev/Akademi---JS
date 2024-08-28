/** @type {import('eslint').Linter.FlatConfig} */
import prettier from 'prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            globals: {
                console: 'writable',
                __dirname: 'readable',
                __filename: 'readable',
                process: 'readable',
                // Thêm các biến toàn cục khác nếu cần
            },
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            // Bao gồm plugin 'prettier' để sử dụng các quy tắc của prettier
            prettier: eslintPluginPrettier,
        },
        rules: {
            // Các quy tắc Prettier được bao gồm thông qua plugin
            'prettier/prettier': 'error',
        },
        // Bao gồm cấu hình Prettier trực tiếp
        settings: {
            prettier,
        },
    },
    // Bao gồm các cấu hình khác nếu cần
];
