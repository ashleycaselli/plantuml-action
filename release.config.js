let config = require('semantic-release-preconfigured-conventional-commits');
config.plugins.push(
    "@semantic-release/github",
    [
        "@semantic-release/git",
        {
            "assets": ["action.yml"]
        }
    ]
)
module.exports = config