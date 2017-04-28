'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _graphqlRelay = require('graphql-relay');

var _Node = require('./Node');

var _Node2 = _interopRequireDefault(_Node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLObjectType({
  name: 'Article',
  description: 'Featured article',

  fields: {
    id: (0, _graphqlRelay.globalIdField)('Article'),

    title: {
      type: _graphql.GraphQLString
    },

    author: {
      type: _graphql.GraphQLString
    },

    url: {
      type: _graphql.GraphQLString
    }
  },

  interfaces: [_Node2.default.interface]
}); /**
     * Node.js API Starter Kit (https://reactstarter.com/nodejs)
     *
     * Copyright © 2016-present Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */
//# sourceMappingURL=ArticleType.js.map
