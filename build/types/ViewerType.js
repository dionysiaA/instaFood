'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _graphqlRelay = require('graphql-relay');

var _Article = require('../models/Article');

var _Article2 = _interopRequireDefault(_Article);

var _ArticleType = require('./ArticleType');

var _ArticleType2 = _interopRequireDefault(_ArticleType);

var _UserType = require('./UserType');

var _UserType2 = _interopRequireDefault(_UserType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const articles = (0, _graphqlRelay.connectionDefinitions)({ name: 'Article', nodeType: _ArticleType2.default }); /**
                                                                                                                  * Node.js API Starter Kit (https://reactstarter.com/nodejs)
                                                                                                                  *
                                                                                                                  * Copyright © 2016-present Kriasoft, LLC. All rights reserved.
                                                                                                                  *
                                                                                                                  * This source code is licensed under the MIT license found in the
                                                                                                                  * LICENSE.txt file in the root directory of this source tree.
                                                                                                                  */

exports.default = new _graphql.GraphQLObjectType({
  name: 'Viewer',
  fields: {
    me: {
      type: _UserType2.default,
      resolve(root, args, { user }) {
        return user;
      }
    },
    articles: {
      type: articles.connectionType,
      description: 'Featured articles',
      args: _graphqlRelay.connectionArgs,
      resolve: (_, args) => (0, _graphqlRelay.connectionFromPromisedArray)(_Article2.default.find(), args)
    }
  }
});
//# sourceMappingURL=ViewerType.js.map
