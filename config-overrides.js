module.exports = {
    // The Webpack config to use when compiling your react app for development or production.
    webpack: function(config, env) {
      // ...add your webpack config
      config.resolve = {
        fallback: {
          util: require.resolve("util/"),
          os: require.resolve("os-browserify/browser"),
          path: require.resolve("path-browserify"),
          fs: false
        }
    }
      return config;
    }
}