module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/forbid-prop-types": [0],
    },
    "globals": { "fetch": false },
    "env": {
        "browser": true,
        "node": true,
    },
};