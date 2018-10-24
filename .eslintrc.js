module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/forbid-prop-types": [0],
        "import/no-named-as-default": 0,
        "import/no-named-as-default-member": 0,
        "no-underscore-dangle": ["error", { "allow": ["_id"] }],
        "jsx-a11y/click-events-have-key-events":0,
        "jsx-a11y/anchor-is-valid":0,
        "jsx-a11y/no-static-element-interactions":0,
        "global-require":0,
        "import/no-dynamic-require":0,
        "import/no-extraneous-dependencies": ["error", { "devDependencies": true }]
    },
    "globals": { "fetch": false },
    "env": {
        "browser": true,
        "node": true,
    },  
    "parser": "babel-eslint",
    "settings": {
      "import/parser": "babel-eslint",
    }
};