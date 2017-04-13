/* eslint-disable no-magic-numbers */

// Any rule that does not have a preference comment is not part of the vue or standard config
// and has been added by my preference - AWA
module.exports = function config (level) {
  // This allows sublime text to not jump around on save when there is
  // a rule that is broken that is not critical to the code compiling well
  const developLevel = level || 'off'
  const levelSetting = process.env.NODE_ENV === 'production' ? 'error' : developLevel

  return {
    'extends': ['standard'],
    rules: {
      'accessor-pairs': levelSetting,
      'array-bracket-spacing': [levelSetting, 'never'],
      'arrow-spacing': [levelSetting, { before: true, after: true }],
      'array-callback-return': 'error',                                       // preference - prevent stupid errors
      'block-spacing': [levelSetting, 'always'],
      'brace-style': [levelSetting, '1tbs', { allowSingleLine: true }],
      camelcase: [levelSetting, { properties: 'always' }],
      'comma-dangle': [levelSetting, 'always-multiline'],                     // preference - cleaner diffs easier / easier to add code
      'comma-spacing': [levelSetting, { before: false, after: true }],
      'comma-style': [levelSetting, 'last'],
      complexity: [levelSetting, 10],                                              // preference - code integrity
      'computed-property-spacing': [levelSetting, 'never'],                        // preference
      'consistent-return': levelSetting,                                           // preference
      'consistent-this': ['error', 'self'],                                   // preference
      curly: [levelSetting, 'multi-line'],
      'default-case': levelSetting,                                                // preference - prevent stupid errors
      'dot-location': [levelSetting, 'property'],
      'dot-notation': levelSetting,                                                // preference
      'eol-last': ['off', 'always'],                                          // preference
      eqeqeq: [levelSetting, 'smart'],
      'func-names': levelSetting,                                                  // preference - helps debug
      'func-style': [levelSetting, 'declaration', { allowArrowFunctions: true }],  // preference
      'handle-callback-err': levelSetting,                                         // preference
      'id-blacklist': [levelSetting, 'cb', 'callback'],                            // preference - enforces better naming
      'id-length': [levelSetting, { exceptions: ['e', '_', '$'] }],                // preferecce - enforces better naming
      indent: [levelSetting, 2, { SwitchCase: 1 }],
      'key-spacing': [levelSetting, { beforeColon: false, afterColon: true }],
      'keyword-spacing': [levelSetting, { before: true, after: true }],
      'linebreak-style': levelSetting,                                             // preference
      'lines-around-comment': [levelSetting, { beforeBlockComment: false }],                                        // preference
      'max-depth': [levelSetting, 4],                                              // preference
      'max-len': [levelSetting, 150],                                              // preference
      'max-nested-callbacks': [levelSetting, 3],                                   // preference
      'max-statements': [levelSetting, 30],                                        // preference
      'no-alert': levelSetting,                                                    // preference
      'no-bitwise': 'error',                                                  // preference - prevents stupid errors
      'no-case-declarations': 'error',                                        // preference - prevents stupid errors
      'no-class-assign': 'error',                                             // preference
      'no-constant-condition': levelSetting,
      'no-debugger': levelSetting,
      'no-duplicate-imports': [levelSetting, { includeExports: true }],            // preference
      'no-div-regex': 'error',                                                // preference - prevents stupid errors
      'no-else-return': levelSetting,                                              // preference
      'no-empty': levelSetting,                                                    // preference
      'no-empty-function': levelSetting,                                           // preference
      'no-eq-null': 'off',                                                    // preference
      'no-extra-label': 'error',                                              // preference
      'no-extra-parens': [levelSetting, 'functions'],
      'no-extra-semi': levelSetting,                                               // preference
      'no-implicit-coercion': 'error',                                        // preference
      'no-implicit-globals': 'error',                                         // preference
      'no-invalid-this': 'error',                                             // preference
      'no-loop-func': levelSetting,                                                // preference
      'no-lonely-if': levelSetting,                                                // preference
      'no-magic-numbers': [levelSetting, { ignore: [-1, 0, 1, 2, 100] }],          // preference - better naming
      'no-mixed-spaces-and-tabs': levelSetting,
      'no-multi-spaces': levelSetting,
      'no-multi-str': levelSetting,
      'no-multiple-empty-lines': [levelSetting, { max: 1 }],
      'no-new-symbol': 'error',                                               // preference
      'no-path-concat': levelSetting,                                              // preference
      'no-script-url': levelSetting,                                               // preference
      'no-this-before-super': 'error',                                        // preference
      'no-trailing-spaces': levelSetting,
      'no-underscore-dangle': levelSetting,                                        // preference
      'no-unneeded-ternary': [levelSetting, { defaultAssignment: false }],
      'no-unreachable': levelSetting,                                              // preference
      'no-unused-expressions': levelSetting,                                       // preference
      'no-unused-labels': 'error',                                            // preference
      'no-unused-vars': [levelSetting, { vars: 'all', args: 'after-used' }],       // preference for after-used vs all
      'no-useless-concat': levelSetting,                                           // preference
      'no-warning-comments': [                                                // preference
        process.env.NODE_ENV === 'production' ? 'warn' : developLevel,        // should never be an error and should be turned off in dev mode
        {
          terms: ['todo', 'fixme'],
          location: 'start',
        },
      ],
      'no-var': 'error',                                                      // preference
      'object-shorthand': [levelSetting, 'always'],                                // preference
      'object-curly-spacing': [                                               // preference
        levelSetting,
        'always',
        { objectsInObjects: false },
      ],
      'operator-assignment': [levelSetting, 'always'],                             // preference
      'operator-linebreak': [
        levelSetting,
        'after',
        {
          overrides: {
            '?': 'before',
            ':': 'before',
          },
        },
      ],
      'padded-blocks': [levelSetting, 'never'],
      'prefer-const': levelSetting,
      'prefer-rest-params': levelSetting,                                        // preference
      'prefer-spread': levelSetting,                                             // preference
      'prefer-template': levelSetting,                                           // preference
      'quote-props': [levelSetting, 'as-needed', { keywords: true }],
      quotes: [
        levelSetting,
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      'require-yield': 'error',                                             // preference
      semi: [levelSetting, 'never'],                                             // preference
      'space-before-blocks': [levelSetting, 'always'],
      'space-before-function-paren': [levelSetting, 'always'],
      'space-in-parens': [levelSetting, 'never'],
      'space-infix-ops': levelSetting,
      'space-unary-ops': [levelSetting, { words: true, nonwords: false }],
      'spaced-comment': [
        levelSetting,
        'always',
        {
          markers: [
            'global',
            'globals',
            'eslint',
            'eslint-disable',
            '*package',
            '!',
            ',',
          ],
        },
      ],
      'standard/array-bracket-even-spacing': [levelSetting, 'either'],
      'standard/object-curly-even-spacing': [levelSetting, 'either'],
      'template-curly-spacing': [levelSetting, 'never'],
      'yield-star-spacing': [                                               // preference
        'error',
        {
          before: false,
          after: true,
        },
      ],
      yoda: [levelSetting, 'never'],
    },
  }
}

