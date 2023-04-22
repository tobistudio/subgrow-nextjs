const { withBlitz } = require("@blitzjs/next")
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require("next/constants")
// TODO: twin.macro has issues https://github.com/ben-rogerson/twin.macro/discussions/219
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
// ValidationError: Invalid configuration object. Webpack has been initialized using a configuration object that does not match the API schema.
// module.exports = {
//   webpack: config => {
//     // Unset client-side javascript that only works server-side
//     config.resolve.fallback = { fs: false, module: false, path: false }
//     return withBlitz(config)
//   },
// }
//module.exports = withBlitz()

// reactStrictMode: true,
// TODO: vercel fix
// https://github.com/blitz-js/blitz/issues/3979
// const config = withBlitz()
//
// delete config.target
//
// config.reactStrictMode = true
// console.log("next config", config)
// console.dir(config)
// module.exports = config
// no btliz config file
//
// Rename the blitz.config.ts file to next.config.js
// TODO: major problem with vercel deployment
// https://github.com/blitz-js/blitz/issues/3979
// module.exports = withBlitz({
//   blitz: {
//     resolverPath: (filePath) => {
//       return filePath.replace("app/", "") // Removes `app/` from the path
//     },
//     reactStrictMode: true,
//   },
//   reactStrictMode: true,
//   config: {
//     reactStrictMode: true,
//   },
//   output: 'standalone',
// })
const config = withBlitz({
  // blitz: {
  //   resolverPath: (filePath) => {
  //     return filePath.replace("app/", "") // Removes `app/` from the path
  //   },
  // },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!isServer) {
      config.module = config.module || {}
      config.module.rules = config.module.rules || []
      // Paths to ignore by webpack
      const excluded = [/.examples/, /.github/, /.husky/]
      excluded.forEach((excluded) => {
        config.module.rules.push({ test: excluded, use: { loader: "null-loader" } })
      })
    }
    // if (ANALYZE) {
    //   config.plugins.push(
    //     new BundleAnalyzerPlugin({
    //       analyzerMode: 'server',
    //       analyzerPort: isServer ? 3000 : 3001,
    //       openAnalyzer: true,
    //     })
    //   )
    // }
    // works without now???
    // config.resolve.fallback = {
    //   "fs": false,
    //   "path": false,
    //   "os": false,
    //   "crypto": false,
    //   "stream": false,
    //   "http": false,
    //   "tls": false,
    //   "zlib": false,
    //   "https": false,
    //   "net": false
    // };

    return config
  },
  output: "standalone",
})
// config.reactStrictMode = true //  set to false act-beautiful-dndUnable to find draggable with id:
// https://stackoverflow.com/questions/60029734/react-beautiful-dnd-i-get-unable-to-find-draggable-with-id-1
config.reactStrictMode = false // setting to false fixes draggable error
config.output = "standalone"
delete config.target
module.exports = config

// TODO:
// https://stackoverflow.com/questions/57781527/how-to-solve-console-error-redux-persist-failed-to-create-sync-storage-falli
