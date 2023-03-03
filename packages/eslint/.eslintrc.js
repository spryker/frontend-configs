module.exports = {
    "env": {
        "commonjs": true,
        "es6": false,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "document": "readonly",
        "navigator": "readonly",
        "location": "readonly",
        "window": "readonly",
        "$": "readonly",
        "jQuery": "readonly",
        "SprykerAjax": "readonly",
        "SprykerAlert": "readonly",
        "SprykerAjaxCallbacks": "readonly",
        "confirm": "readonly",
        "alert": "readonly",
        "localStorage": "readonly",
        "antelope": "readonly",
        "Event": "readonly",
        "CustomEvent": "readonly",
        "swal": "readonly",
        "DEV": "readonly"
    },
    // define the rules to override default rules list
    "rules": {
        "accessor-pairs": "error",
        "camelcase": ["error", { "properties": "always" }],
        "eqeqeq": ["error", "always", { "null": "ignore" }],
        "handle-callback-err": ["error", "^(err|error)$" ],
        "max-lines": ["error", {
            "max": 200,
            "skipBlankLines": true,
            "skipComments": true
        }],
        "new-cap": ["error", {
            "newIsCap": true,
            "capIsNew": false
        }],
        "no-array-constructor": "error",
        "no-caller": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": ["error", "always"],
        "no-console": "error",
        "no-constant-condition": ["error", { "checkLoops": false }],
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-dupe-args": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "off",
        "no-fallthrough": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implied-eval": "error",
        "no-inner-declarations": ["error", "functions"],
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": ["error", { "skipStrings": true, "skipTemplates": true }],
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": ["error", { "allowLoop": false, "allowSwitch": false }],
        "no-lone-blocks": "error",
        "no-multi-str": "error",
        "no-negated-in-lhs": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-path-concat": "error",
        "no-proto": "error",
        "no-prototype-builtins": "off",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-return-assign": ["error", "except-parens"],
        "no-return-await": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-undef": "error",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": ["error"],
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-expressions": ["error", {
            "allowShortCircuit": true,
            "allowTernary": true,
            "allowTaggedTemplates": true
        }],
        "no-unused-vars": ["error", {
            "vars": "all",
            "args": "after-used"
        }],
        "no-use-before-define": ["error", {
            "functions": false,
            "classes": false,
            "variables": false
        }],
        "no-useless-call": "error",
        "no-useless-escape": "error",
        "no-useless-return": "error",
        "no-with": "error",
        "one-var": ["error", {
            "initialized": "never"
        }],
        "prefer-promise-reject-errors": "error",
        "spaced-comment": ["error", "always", {
            "line": {
                "markers": ["*package", "!", "/", ",", "="]
            },
            "block": {
                "balanced": true,
                "markers": ["*package", "!", ",", ":", "::", "flow-include"],
                "exceptions": ["*"]
            }
        }],
        "unicode-bom": ["error", "never"],
        "use-isnan": "error",
        "valid-typeof": ["error", {
            "requireStringLiterals": true
        }],
        "wrap-iife": ["error", "any", {
            "functionPrototypeMethods": true
        }],
        "yoda": ["error", "never"]
    }
};
