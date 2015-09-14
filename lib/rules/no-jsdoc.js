'use strict';

var doctrine = require('doctrine');

function isJSDocComment(text) {
    if (text[0] !== '*') {
        return false;
    }

    try {
        doctrine.parse(text, { unwrap: true, strict: true });
        return true;
    } catch (error) {
        return false;
    }
}

module.exports = function (context) {
    return {
        BlockComment: function (node) {
            if (isJSDocComment(node.value)) {
                context.report({
                    node: node,
                    message: 'Unexpected JSDoc comment.',
                    fix: function (fixer) {
                        return fixer.remove(node);
                    }
                });
            }
        }
    };
};
