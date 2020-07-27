const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path')
const rootPath = path.resolve(__dirname, '../')

module.exports = async ({ config, mode }) => {
  config.resolve.alias['@'] = rootPath
  config.resolve.alias['~'] = rootPath
  config.resolve.extensions.push(
    '.ts',
    '.tsx',
    '.vue',
    '.css',
    '.less',
    '.scss',
    '.sass',
    '.html'
  )

  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          plugins: ['module:@vue/babel-sugar-v-model'],
          presets: ['@nuxt/babel-preset-app', 'vca-jsx'],
        },
      },
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true, // used with ForkTsCheckerWebpackPlugin
        },
      },
    ],
  })
  config.module.rules.push({
    test: /\.sass$/,
    use: [
      'vue-style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            indentedSyntax: true,
          },
        },
      },
    ],
  })
  config.module.rules.push({
    test: /\.vue$/,
    loader: 'vue-docgen-loader',
    enforce: 'post',
  })
  config.plugins.push(new ForkTsCheckerWebpackPlugin())
  return config
}
