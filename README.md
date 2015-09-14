[![NPM Version](https://img.shields.io/npm/v/eslint-plugin-comments.svg?style=flat)](https://www.npmjs.org/package/eslint-plugin-comments)
[![Build Status](https://img.shields.io/travis/lo1tuma/eslint-plugin-comments.svg?style=flat)](https://travis-ci.org/lo1tuma/eslint-plugin-comments)
[![Coverage Status](https://img.shields.io/coveralls/lo1tuma/eslint-plugin-comments.svg?style=flat)](https://coveralls.io/r/lo1tuma/eslint-plugin-comments)
[![Peer Dependencies](http://img.shields.io/david/peer/lo1tuma/eslint-plugin-comments.svg?style=flat)](https://david-dm.org/lo1tuma/eslint-plugin-comments#info=peerDependencies&view=table)
[![NPM Downloads](https://img.shields.io/npm/dm/eslint-plugin-comments.svg?style=flat)](https://www.npmjs.org/package/eslint-plugin-comments)

# eslint-plugin-comments

ESLint rules for JavaScript comments.

## Install and configure

This plugin requires ESLint `1.4.1` or later.

`npm install --save-dev eslint-plugin-comments`

Then add a reference to this plugin and selected rules in your eslint config:

```json
{
  "plugins": [
    "comments"
  ],
  "rules": {
    "comments/no-jsdoc": 2
  }
}
```
See [Configuring Eslint](http://eslint.org/docs/user-guide/configuring) on [eslint.org](http://eslint.org) for more info.

## Rules

* `no-jsdoc` - forbids the use of JSDoc comments (fixable)

