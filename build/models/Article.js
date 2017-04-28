'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Node.js API Starter Kit (https://reactstarter.com/nodejs)
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * Copyright © 2016-present Kriasoft, LLC. All rights reserved.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                   * LICENSE.txt file in the root directory of this source tree.
                                                                                                                                                                                                                                                                   */

var _dataloader = require('dataloader');

var _dataloader2 = _interopRequireDefault(_dataloader);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _redis = require('../redis');

var _redis2 = _interopRequireDefault(_redis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DATA_URI = 'https://gist.githubusercontent.com/koistya/a32919e847531320675764e7308b796a/raw/articles.json';

let loader;
let lastFetchTime = 0;

// returns [ { id: 1, title: '...', author: '...', url: '...' }, ... ]
async function fetchArticles() {
  lastFetchTime = Date.now();
  const data = await (0, _nodeFetch2.default)(DATA_URI).then(x => x.json());
  await _redis2.default.msetAsync(data.reduce((acc, val, idx) => [...acc, `articles:${data.length - idx}`, JSON.stringify(val)], []));
  return data.map((x, i) => _extends({ id: data.length - i }, x));
}

class Article {

  static async find() {
    const keys = await _redis2.default.keysAsync('articles:*');
    const data = keys.length ? (await _redis2.default.mgetAsync(keys)).map((x, i) => _extends({ id: keys[i] }, JSON.parse(x))) : await fetchArticles();

    // Update cache in the background if it's older than 10 minutes
    if (Date.now() - lastFetchTime > 600000) fetchArticles();

    return data.map(x => Object.assign(new Article(), x));
  }

  static load(keys) {
    return loader.load(keys);
  }
}

loader = new _dataloader2.default(keys => Promise.resolve().then(() => lastFetchTime ? null : fetchArticles()) // eslint-disable-line no-confusing-arrow
.then(() => _redis2.default.mgetAsync(keys.map(x => `articles:${x}`))).then(data => data.map((x, i) => {
  if (x) return Object.assign(new Article(), x, { id: keys[i] });
  throw new Error(`Cannot find an article with ID ${keys[i]}`);
})));

exports.default = Article;
//# sourceMappingURL=Article.js.map
