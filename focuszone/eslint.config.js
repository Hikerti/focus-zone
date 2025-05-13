module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/explicit-module-boundary-types'
    ],
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
    ],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',

        'react/prop-types': 'off',

        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',

        'no-console': 'warn',
        'no-debugger': 'warn',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};