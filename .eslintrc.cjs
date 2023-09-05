module.exports = {
    plugins: ["import", "tailwindcss"],
    extends: [
        "eslint:recommended",
        "plugin:astro/recommended",
        "plugin:import/recommended",
        "plugin:tailwindcss/recommended",
    ],
    rules: {
        "no-undef": 0,
        "import/no-unresolved": 0,
        "import/order": [
            "error",
            {
                groups: [
                    ["external", "builtin"],
                    "unknown",
                    "internal",
                    ["parent", "sibling", "index"],
                ],
                alphabetize: {
                    order: "asc",
                    caseInsensitive: false,
                },
                "newlines-between": "always",
                pathGroupsExcludedImportTypes: ["builtin"],
            },
        ],
        "sort-imports": [
            "error",
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
            },
        ],
        "tailwindcss/no-custom-classname": "off",
        "tailwindcss/no-contradicting-classname": "warn",
    },
    overrides: [
        {
            files: ["*.astro"],
            parser: "astro-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser",
                extraFileExtensions: [".astro"],
            },
        },
        {
            // Define the configuration for `<script>` tag.
            // Script in `<script>` is assigned a virtual file name with the `.js` extension.
            files: ["**/*.astro/*.js", "*.astro/*.js"],
            parser: "@typescript-eslint/parser",
            rules: {
                "prettier/prettier": "off",
                "no-undef": 0,
            },
        },
    ],
    env: {
        node: true,
    },
};
