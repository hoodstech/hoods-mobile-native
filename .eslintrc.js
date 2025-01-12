// https://docs.expo.dev/guides/using-eslint/
module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint/eslint-plugin', 'import-newlines', 'import', '@stylistic', '@stylistic/jsx'],
	extends: [
		'expo',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript',
		'plugin:import/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
	],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	ignorePatterns: ['.eslintrc.js', 'babel.config.js', 'metro.config.js'],
	rules: {
		'@stylistic/indent': ["error", 2],
		'@stylistic/semi': ['error', 'never'],
		'@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
		'@stylistic/comma-dangle': ['error', 'always-multiline'],
		'@stylistic/comma-spacing': ['error', { before: false, after: true }],
		'@stylistic/object-curly-spacing': ["error", "always", { "objectsInObjects": false, "arraysInObjects": false }],
		'@stylistic/jsx/jsx-max-props-per-line': [2, { "maximum": { "single": 2, "multi": 1 } }],
		'@stylistic/jsx/jsx-one-expression-per-line': [2, { 'allow': 'single-child' }],
		'@stylistic/jsx/jsx-first-prop-new-line': [2, 'multiline'],
		// TODO: Подумать, как интегрировать с текущими отступами, конфликтует
		// '@stylistic/jsx/jsx-closing-tag-location': [2, 'tag-aligned'],
		// '@stylistic/jsx/jsx-closing-bracket-location': [2, 'tag-aligned'],
		'import-newlines/enforce': ['error', { items: 7, 'max-len': 120 }],
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
				pathGroupsExcludedImportTypes: [],
				pathGroups: [
					{
						pattern: '~/**',
						group: 'index',
						position: 'after',
					},
				],
			},
		],
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
	},
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
}
