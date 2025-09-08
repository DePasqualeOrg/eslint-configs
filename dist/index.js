export const typeScriptConfig = {
  files: ['**/*.ts'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'none',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'error',
    'prefer-const': 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'object-shorthand': ['error', 'always', { avoidQuotes: true }],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-template': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'consistent-return': 'error',
    'no-implicit-coercion': [
      'error',
      {
        boolean: true,
        number: true,
        string: true,
        disallowTemplateShorthand: true,
      },
    ],
    'no-fallthrough': 'error',
    'no-promise-executor-return': ['error'],
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowAny: false,
        allowNullableBoolean: false,
        allowNullableEnum: false,
        allowNullableNumber: false,
        allowNullableObject: false,
        allowNullableString: false,
        allowNumber: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
        allowString: false,
      },
    ],
    '@typescript-eslint/prefer-nullish-coalescing': [
      'error',
      {
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: false,
      },
    ],
    '@typescript-eslint/prefer-optional-chain': [
      'error',
      {
        checkAny: true,
        checkUnknown: true,
        requireNullish: true,
      },
    ],
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': [
      'error',
      {
        considerDefaultExhaustiveForUnions: true,
      },
    ],
    '@typescript-eslint/no-floating-promises': [
      'error',
      {
        ignoreVoid: true,
        ignoreIIFE: false,
      },
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksConditionals: true,
        checksVoidReturn: true,
        checksSpreads: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
        allowFunctionsWithoutTypeParameters: false,
        allowedNames: [],
        allowIIFEs: false,
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allow: [{ name: ['Error', 'URL', 'URLSearchParams'], from: 'lib' }],
        allowAny: true,
        allowBoolean: true,
        allowNullish: true,
        allowNumber: true,
        allowRegExp: true,
      },
    ],
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        disallowTypeAnnotations: true,
        fixStyle: 'separate-type-imports',
        prefer: 'type-imports',
      },
    ],
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      {
        ignoreArrowShorthand: true,
        ignoreVoidOperator: false,
        ignoreVoidReturningFunctions: false,
      },
    ],
    'no-duplicate-imports': ['error', { allowSeparateTypeImports: true }],
  },
};
const svelteKitConfig = {
  files: [
    '**/+server.ts',
    '**/+page.server.ts',
    '**/+page.ts',
    '**/+layout.server.ts',
    '**/+layout.ts',
    '**/hooks.server.ts',
    '**/hooks.client.ts',
  ],
  rules: {
    'consistent-return': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/only-throw-error': 'off',
  },
};
const svelteConfig = {
  files: ['**/*.svelte'],
  rules: {
    'prefer-const': 'off',
    'svelte/prefer-const': 'error',
  },
};
export const svelteKitConfigs = [
  {
    ...typeScriptConfig,
    files: ['**/*.ts', '**/*.svelte'], // Also use TypeScript rules in Svelte files
  },
  svelteKitConfig,
  svelteConfig,
];
//# sourceMappingURL=index.js.map
