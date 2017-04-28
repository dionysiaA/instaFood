'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

exports.default = new _graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
    },

    email: {
      type: _graphql.GraphQLString
    }
  }
}); /**
     * Node.js API Starter Kit (https://reactstarter.com/nodejs)
     *
     * Copyright © 2016-present Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */
//# sourceMappingURL=UserType.js.map
