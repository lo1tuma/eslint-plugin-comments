'use strict';

var RuleTester = require('eslint').RuleTester,
    rule = require('../../lib/rules/no-jsdoc'),
    ruleTester = new RuleTester(),
    expectedErrorMessage = 'Unexpected JSDoc comment.';

ruleTester.run('no-jsdoc', rule, {

    valid: [
        '/*\n * foo \n */var foo = "bar";',
        '//* foo\n var foo;',
        '/* foo */ var foo;',
        '/**\n * @@version\n */\nvar bar;'
    ],

    invalid: [
        {
            code: '/**\n @class MyClass \n*/\nfunction MyClass() {}',
            errors: [ { message: expectedErrorMessage, column: 1, line: 1 } ],
            output: '\nfunction MyClass() {}'
        },
        {
            code: 'var a;\n    /**\n @func myFunction \n*/\nfunction myFunction() {}',
            errors: [ { message: expectedErrorMessage, column: 5, line: 2 } ],
            output: 'var a;\n    \nfunction myFunction() {}'
        },
        {
            code: '/**\n @function myFunction\n*/\nfunction myFunction() {}',
            errors: [ { message: expectedErrorMessage, column: 1, line: 1 } ],
            output: '\nfunction myFunction() {}'
        },
        {
            code: '/**\n* Description\n* @returns {void} */\nfunction foo(){}',
            errors: [ { message: expectedErrorMessage, column: 1, line: 1 } ],
            output: '\nfunction foo(){}'
        },
        {
            code: '/**\n* Description\n* @inheritdoc */\nfunction foo(arg1, arg2){ return ""; }',
            errors: [ { message: expectedErrorMessage, column: 1, line: 1 } ],
            output: '\nfunction foo(arg1, arg2){ return ""; }'
        },
        {
            code: [
                '/**',
                '* Description*',
                ' @param {Object} p bar*',
                ' @param {string[]} p.files qux*',
                ' @param {Function} cb baz*',
                ' @returns {void} */',
                'function foo(p, cb){}'
            ].join('\n'),
            errors: [ { message: expectedErrorMessage, column: 1, line: 1 } ],
            output: '\nfunction foo(p, cb){}'
        }
    ]

});
