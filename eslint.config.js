import globals from 'globals'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'

export default tseslint.config({
	files: ['**/*.ts'],
	languageOptions: {
		globals: globals.node,
		parserOptions: {
			projectService: true,
			tsconfigRootDir: import.meta.dirname,
		},
	},
	extends: [
		eslint.configs.recommended,
		prettier,
		...tseslint.configs.strictTypeChecked,
		...tseslint.configs.stylisticTypeChecked,
	],
	linterOptions: {
		reportUnusedDisableDirectives: 'error',
	},
})
