'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlRelay = require('graphql-relay');

var _Article = require('../models/Article');

var _Article2 = _interopRequireDefault(_Article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable global-require */

/**
 * Node.js API Starter Kit (https://reactstarter.com/nodejs)
 *
 * Copyright © 2016-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

const { nodeInterface, nodeField, nodesField } = (0, _graphqlRelay.nodeDefinitions)(globalId => {
  const { type, id } = (0, _graphqlRelay.fromGlobalId)(globalId);

  if (type === 'Article') {
    return _Article2.default.load(id);
  }

  return null;
}, obj => {
  if (obj instanceof _Article2.default) {
    return require('./ArticleType').default;
  }

  return null;
});

exports.default = {
  interface: nodeInterface,
  nodeField,
  nodesField
};
//# sourceMappingURL=Node.js.map
