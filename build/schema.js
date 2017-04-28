'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _Node = require('./types/Node');

var _Node2 = _interopRequireDefault(_Node);

var _ViewerType = require('./types/ViewerType');

var _ViewerType2 = _interopRequireDefault(_ViewerType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// In order to make it work with Relay 0.x, all the top-level
// fields are placed inside the "viewer" field
exports.default = new _graphql.GraphQLSchema({
  query: new _graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      node: _Node2.default.nodeField,
      nodes: _Node2.default.nodesField,
      viewer: {
        type: _ViewerType2.default,
        resolve() {
          return Object.create(null);
        }
      }
    }
  })
}); /**
     * Node.js API Starter Kit (https://reactstarter.com/nodejs)
     *
     * Copyright © 2016-present Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */
//# sourceMappingURL=schema.js.map
