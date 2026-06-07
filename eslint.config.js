// Modern ESLint configuration using flat config format
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

const commonRules = {
    // Best Practices
    "no-constant-condition": "error",
    "no-empty": ["error", { allowEmptyCatch: true }],
    "no-extra-boolean-cast": "error",
    "no-extra-semi": "error",
    "no-unreachable": "error",
    "no-func-assign": "error",
    "no-obj-calls": "error",
    "no-sparse-arrays": "error",
    "use-isnan": "error",
    "valid-typeof": "error",
    "no-irregular-whitespace": "error",
    "no-control-regex": "warn",

    // Style
    "semi": ["error", "always"],
    "quotes": ["error", "double", { avoidEscape: true }],
    "indent": ["error", 4, { SwitchCase: 1 }],
    "comma-dangle": ["error", "never"],
    "no-trailing-spaces": "error",
    "eol-last": ["error", "always"],
    "space-before-blocks": ["error", "always"],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "comma-spacing": ["error", { before: false, after: true }],
    "key-spacing": ["error", { beforeColon: false, afterColon: true }],
    "space-infix-ops": "error",
    "space-unary-ops": ["error", { words: true, nonwords: false }],
    "keyword-spacing": ["error", { before: true, after: true }],
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 0 }],

    // Variables
    "no-undef": "error",
    "no-use-before-define": ["error", { functions: true, classes: true }],
    "no-redeclare": "error",
    "no-shadow": ["warn", { builtinGlobals: false }],

    // Possible Errors
    "no-console": "off",
    "no-debugger": "warn",
    "constructor-super": "error",
    "for-direction": "error",
    "getter-return": "error",
    "no-async-promise-executor": "error",
    "no-case-declarations": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-const-assign": "error",
    "no-dupe-args": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-import-assign": "error",
    "no-setter-return": "error",
    "no-this-before-super": "error"
};

const browserGlobals = {
    window: "readonly",
    document: "readonly",
    console: "readonly",
    navigator: "readonly",
    fetch: "readonly",
    localStorage: "readonly",
    sessionStorage: "readonly"
};

const nodeGlobals = {
    process: "readonly",
    global: "readonly",
    Buffer: "readonly",
    __dirname: "readonly",
    __filename: "readonly",
    console: "readonly"
};

export default [
    {
        ignores: ["node_modules/", "dist/", ".git/", "build/", "coverage/"]
    },

    // ================================================================
    // BROWSER - JavaScript files
    // ================================================================
    {
        files: ["**/*.js"],
        ignores: [
            "server/**/*.js",
            "api/**/*.js",
            "backend/**/*.js",
            "**/*.node.js",
            "**/*.server.js"
        ],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: browserGlobals
        },
        rules: {
            ...commonRules,
            "no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }]
        }
    },

    // ================================================================
    // NODE.JS - JavaScript files
    // ================================================================
    {
        files: [
            "server/**/*.js",
            "api/**/*.js",
            "backend/**/*.js",
            "**/*.node.js",
            "**/*.server.js"
        ],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: nodeGlobals
        },
        rules: {
            ...commonRules,
            "no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
            "no-console": "off"
        }
    },

    // BROWSER - TypeScript files (.ts, .tsx)
    // ================================================================
    {
        files: ["**/*.ts", "**/*.tsx"],
        ignores: [
            "server/**/*.ts",
            "server/**/*.tsx",
            "api/**/*.ts",
            "api/**/*.tsx",
            "backend/**/*.ts",
            "backend/**/*.tsx",
            "**/*.node.ts",
            "**/*.node.tsx",
            "**/*.server.ts",
            "**/*.server.tsx"
        ],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parser: tsParser,
            parserOptions: {
                project: false,
                lib: ["dom", "es2020"]
            },
            globals: browserGlobals
        },
        plugins: {
            "@typescript-eslint": tsPlugin
        },
        rules: {
            ...commonRules,
            "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/explicit-function-return-types": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-inferrable-types": "off"
        }
    },

    // ================================================================
    // NODE.JS - TypeScript files (.ts, .tsx)
    // ================================================================
    {
        files: [
            "server/**/*.ts",
            "server/**/*.tsx",
            "api/**/*.ts",
            "api/**/*.tsx",
            "backend/**/*.ts",
            "backend/**/*.tsx",
            "**/*.node.ts",
            "**/*.node.tsx",
            "**/*.server.ts",
            "**/*.server.tsx"
        ],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parser: tsParser,
            parserOptions: {
                project: false
            },
            globals: nodeGlobals
        },
        plugins: {
            "@typescript-eslint": tsPlugin
        },
        rules: {
            ...commonRules,
            "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/explicit-function-return-types": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-inferrable-types": "off",
            "no-console": "off"
        }
    }
];
