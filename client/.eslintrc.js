const [OFF, WARN, ERROR
] = [
	0,
	1,
	2
];
​
module.exports = {
  extends: [
    'react-app',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'airbnb',
    'plugin:import/recommended',
	],
  plugins: ['react', 'jest', 'react-hooks', 'jsx-a11y', 'babel', 'import', 'prettier'
	],
  parser: 'babel-eslint',
  ignorePatterns: ['!.storybook/', '!.eslintrc.js'
	],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
		},
	},
  env: {
    es6: true,
    browser: true,
    jest: true,
	},
  rules: {
		// import
		'import/no-extraneous-dependencies': OFF,
		'prettier/prettier': ERROR,
		// react
    'react/jsx-filename-extension': [ERROR,
			{ extensions: ['.js'
				]
			}
		],
    'react/jsx-one-expression-per-line': OFF,
    'react/prop-types': [
      ERROR,
			{
        skipUndeclared: true,
			},
		],
    'react/jsx-props-no-spreading': OFF,
		// react-hooks
    'react-hooks/exhaustive-deps': WARN,
    'react-hooks/rules-of-hooks': ERROR,
		// base
    'arrow-parens': [ERROR, 'always'
		],
    'class-methods-use-this': OFF,
    'comma-dangle': [
      ERROR,
			{
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
			},
		],
    'function-paren-newline': [OFF, 'consistent'
		],
    'implicit-arrow-linebreak': OFF,
    'lines-between-class-members': [
      ERROR,
      'always',
			{
        exceptAfterSingleLine: true,
			},
		],
    'max-len': [
      ERROR,
			{
        code: 120,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
			},
		],
    'no-console': [
      ERROR,
			{
        allow: ['warn', 'error'
				],
			},
		],
    'no-plusplus': OFF,
    'no-use-before-define': [
      ERROR,
			{
        functions: false,
        classes: false,
        variables: false,
			},
		],
    'object-curly-newline': [ERROR,
			{ consistent: true
			}
		],
    'operator-linebreak': [
      ERROR,
      'before',
			{
        overrides: {
          '=': 'after',
				},
			},
		],
    radix: [ERROR, 'as-needed'
		],
    'space-before-function-paren': [
      ERROR,
			{
        anonymous: 'ignore',
        named: 'never',
        asyncArrow: 'always',
			},
		],
	},
}
