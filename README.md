# think-webpack-hot-middleware
webpack hot middleware for ThinkJS

## Installation

```
$ npm install think-webpack-hot-middleware --save-dev
```

## Exmaple

```
$ git clone https://github.com/lizheming/think-webpack-hot-middleware
$ cd think-webpack-hot-middleware/example
$ npm install
$ npm start
```

## How To Use in ThinkJS 2.x

1. `think-webpack-hot-middleware` should use with `think-webpack-dev-middleware`

    ```
    $ npm install think-webpack-dev-middleware --save-dev
    ```

2. add hook in `src/common/config/hook.js`

    ```
    export default {
      resource: ['webpack-dev', 'webpack-hot']
    }
    ```

3. add hook middleware in `src/common/bootstrap/middleware.js`

    ```
    import webpackDevMiddleware from 'think-webpack-dev-middleware';
    import webpackHotMiddleware from 'think-webpack-hot-middleware';
    import webpack from 'webpack';
    import config from '../../../webpack.config.js';

    const compiler = webpack(config);

    think.middleware('webpack-dev', webpackDevMiddleware(
      compiler,
      {
        stat: { color: true }
      }
    ));

    think.middleware('webpack-hot', webpackHotMiddleware(
      compiler,
      {
        log: think.log
      }
    ))
    ```
4. add webpack-hot-middleware into `webpack.config.js`:

    ```
    var webpack = require('webpack');

    module.exports = {
      entry: {
        main: [
          'src/index.js',
          'webpack-hot-middleware/client?reload=true'
        ]
      },
      plugin: [
        new webpack.HotModuleReplacementPlugin()
      ]
    };
    ```
    
## Advanced Configuration

  See [webpack-hot-middleware](https://github.com/webpack/webpack-dev-middleware#usage) to find more usage.

## License

[GPL-3.0](LICENSE)