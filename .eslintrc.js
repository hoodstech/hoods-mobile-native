// https://docs.expo.dev/guides/using-eslint/
module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint/eslint-plugin', 'import-newlines', 'import', '@stylistic'],
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
		'@stylistic/semi': ['error', 'never'],
		'@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
		'@stylistic/comma-dangle': ['error', 'always-multiline'],
		'@stylistic/comma-spacing': ['error', { before: false, after: true }],
		'@stylistic/object-curly-spacing': ["error", "always", { "objectsInObjects": false, "arraysInObjects": false }],
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
