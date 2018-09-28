module.exports = {
  "globDirectory": "client/",
  "globPatterns": [
    "**/*.{js,jpg,css}"
  ],
  "swDest": "sw\\sw.js",
  "runtimeCaching": [{
  "urlPattern" : new RegExp('^https://wger\.de/api/v2/exercise/'),
  "handler": 'cacheFirst',
    "options": {
      "cacheableResponse": {
        "statuses": [0, 200]
      }
    }
  }]
};