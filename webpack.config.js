const nodeExternals = require("webpack-node-externals")
module.exports = {
    mode: 'production',
    entry: [
        './index.js'
    ],
    output: {
        filename: 'node-bundle.js',
        libraryTarget: "commonjs2"
    },
    resolve: {
        modules: ['node_modules'],
    },
    target: 'node',
    externals: [nodeExternals({
        allowlist: [
            /mjml.+/,
            'mjml'
        ]
    })]
}
