module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === "development") {
      config.devtool = "eval-source-map";
      config.output.devtoolModuleFilenameTemplate = info =>
        info.resourcePath.match(/\.vue$/) &&
        !info.identifier.match(/type=script/)
          ? `webpack-generated:///${info.resourcePath}?${info.hash}`
          : `webpack-yourCode:///${info.resourcePath}`;

      config.output.devtoolFallbackModuleFilenameTemplate =
        "webpack:///[resource-path]?[hash]";
    }
  },

  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false
    }
  },

  transpileDependencies: ["quasar"],
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/quasar.variables.scss";'
      }
    }
  },
  devServer: {
    proxy: "http://localhost:9020"
  }
};
