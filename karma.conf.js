const path = require('path');
const APP_ENTRY = path.resolve(__dirname, 'src/public/AppEntry.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: ['PhantomJS'],
    frameworks: ['mocha'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'test/test-grabber.js'
    ],

    preprocessors: {
      'src/public/AppEntry.js': ['webpack', 'sourcemap'],
      'test/test-grabber.js': ['webpack', 'coverage', 'sourcemap']
    },

    reporters: ['nyan', 'coverage'],

    nyanReporter: {
      suppressErrorHighlighting: true,
    },

    coverageReporter: {
      reporters: [
        {type: 'text'},
        {type: 'text-summary'},
        {type: 'html', dir: 'coverage/', subdir: 'report/'},
        {type: 'lcov', dir: 'coverage/'},
        {type: 'cobertura', dir: 'coverage/', file: 'coverage.xml'},
      ],
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules'),
            query: {
              plugins: ['transform-decorators-legacy', 'transform-regenerator'],
              presets: ['react', 'es2015', 'stage-1']
            }
          },
          { test: /\.css$/, loader: 'style-loader!css-loader' },
          { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
          { test: /\.gif$/, loader: 'url-loader?mimetype=image/png' },
          { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
          { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?name=[name].[ext]' }
        ]
      },
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },

    webpackServer: {
      noInfo: true
    },

    browserConsoleLogOptions: {
      level: 'log',
      terminal: true
    },
    
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
  });
};




// const path = require('path');
// const APP_ENTRY = path.resolve(__dirname, 'src/public/AppEntry.js');

// module.exports = function(config) {
//   config.set({
//     basePath: '',
//     browsers: ['PhantomJS'],
//     frameworks: ['mocha'],
//     files: [
//       'node_modules/babel-polyfill/dist/polyfill.js',
//       'src/public/AppEntry.js',
//       'test/test-grabber.js'
//     ],

//     preprocessors: {
//       'src/public/AppEntry.js': ['webpack', 'sourcemap'],
//       'test/test-grabber.js': ['webpack', 'sourcemap']
//     },

//     reporters: ['nyan', 'coverage'],

//     nyanReporter: {
//       suppressErrorHighlighting: true,
//     },

//     coverageReporter: {
//       reporters: [
//         {type: 'text'},
//         {type: 'text-summary'},
//         {type: 'html', dir: 'coverage/', subdir: 'report/'},
//         {type: 'lcov', dir: 'coverage/'},
//         {type: 'cobertura', dir: 'coverage/', file: 'coverage.xml'},
//       ],
//     },

//     webpack: {
//       devtool: 'inline-source-map',
//       module: {
//         loaders: [
//           {
//             test: /\.js$/,
//             include: APP_ENTRY,
//             loader: 'babel-loader',
//             exclude: path.resolve(__dirname, 'node_modules'),
//             query: {
//               plugins: ['transform-decorators-legacy', 'transform-regenerator'],
//               presets: ['react', 'es2015', 'stage-1']
//             }
//           },
//           { test: /\.css$/, loader: 'style-loader!css-loader' },
//           { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
//           { test: /\.gif$/, loader: 'url-loader?mimetype=image/png' },
//           { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
//           { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?name=[name].[ext]' }
//         ]
//       },
//       externals: {
//         'react/addons': true,
//         'react/lib/ExecutionEnvironment': true,
//         'react/lib/ReactContext': true
//       }
//     },

//     webpackServer: {
//       noInfo: true
//     },

//     browserConsoleLogOptions: {
//       level: 'log',
//       terminal: true
//     },

//     port: 9876,
//     colors: true,
//     logLevel: config.LOG_INFO,
//     autoWatch: true,
//     singleRun: false,
//   });
// };