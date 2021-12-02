module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  overrides: [
    {
      files: ['backend/*.js', 'backend/**/*.js'],
      rules: { 'import/extensions': ['error', 'always'] },
    },
  ],
  settings: {
    'import/internal-regex': /@mr-bean\//,
  },
  rules: {
    'arrow-body-style': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'implicit-arrow-linebreak': 'off',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          ['external', 'internal'],
          ['parent', 'sibling', 'index'],
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
          },
          {
            pattern: 'react-**',
            group: 'builtin',
          },
          {
            pattern: 'react-**/**',
            group: 'builtin',
          },
          {
            pattern: '@mr-bean/**',
            group: 'parent',
          },
          {
            pattern: 'models/**',
            group: 'parent',
          },
          {
            pattern: 'api/**',
            group: 'parent',
          },
          {
            pattern: 'components/**',
            group: 'parent',
          },
          {
            pattern: 'features/**',
            group: 'parent',
          },
          {
            pattern: 'utils',
            group: 'parent',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'never', children: 'always' },
    ],
    'react/display-name': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-debugger': 'warn',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'warn',
    'no-use-before-define': ['error', { functions: false, classes: true }],
    'object-curly-newline': 'off',
    semi: ['error', 'never'],
  },
}
