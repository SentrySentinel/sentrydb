const path = require('path');
const slsw = require('serverless-webpack');
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');

const isLocal = slsw.lib.webpack.isLocal;
const devtool_debug = 'cheap-module-eval-source-map';
const devtool_dev_server = 'eval';
const defaultMode = 'development';
const deployment_externals = ['aws-sdk'];
const default_externals = ['pg-hstore', 'pg'];
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

function getDevtool() {
  const devtool = process.env.apiture_vscode_debug == 'true' ? devtool_debug : devtool_dev_server;
  slsw.lib.serverless.cli.log(`[webpack] Using devtool: ${devtool}`);

  return devtool;
}

function resolveExternals() {
  let externals;
  let cliMessage;

  if (process.argv.indexOf('deploy') > -1) {
    externals = [...deployment_externals];
    cliMessage = 'deployment externals';
  } else {
    externals = nodeExternals();
    cliMessage = 'node externals plugin';
  }

  externals = default_externals.concat(externals);
  slsw.lib.serverless.cli.log(`[webpack] Using externals: ${cliMessage}`);
  return externals;
}

function resolveMode() {
  return isLocal == false ? 'production' : defaultMode;
}

module.exports = {
  mode: resolveMode(),
  entry: slsw.lib.entries,
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  devtool: getDevtool(),
  target: 'node',
  module: {
    rules: [
      {
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'test'),
          path.resolve(__dirname, 'deployment'),
        ],
        include: path.resolve(__dirname, 'src'),
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true
        }
      }
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({}),
    new Dotenv({
      path: '.env',
    }),
  ],
  externals: resolveExternals(),
};
