module.exports = [
  {
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  },
  {
    test: /\.(png|jpe?g|gif)$/i,
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]',
    },
  },
  {
    test: /\.m?js/,
    resolve: {
        fullySpecified: false
    }
  },
  {test:/\.css$/,use:['style-loader','css-loader']},
  {
    test: /\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
    }, {
      loader: 'less-loader', // compiles Less to CSS
      options: {
        lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
          modifyVars: {
            'primary-color': 'pink',
            'link-color': 'pink',
            'border-radius-base': '5px',
          },
          javascriptEnabled: true,
        },
      },
    }],
    // ...other rules
  }
]