import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack/dev.config';

const server = express();
const port = process.env.PORT || 3000;
const compiler = webpack(config);

server.use(express.static(__dirname + '/public'));

server.use(webpackMiddleware(compiler, {
  contentBase: 'public',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
}));

server.use(webpackHotMiddleware(compiler));

server.get('*', function response(req, res) {

  res.sendFile(path.join(__dirname, 'public/index.html'));

});

server.listen(3000);

server.listen(port, 'localhost', function onStart(err) {

  if (err) {
    console.error(err);
  }

  console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);

});
