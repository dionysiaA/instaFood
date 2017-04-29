'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class User {

  static findOne(...args) {
    console.log(args, 'here are the args');
    return _db2.default.table('users').where(...args).first('id', 'email');
  }

  static findOneByLogin(provider, key) {
    return _db2.default.table('users').leftJoin('user_logins', 'users.id', 'user_logins.user_id').where({ 'user_logins.name': provider, 'user_logins.key': key }).first('id', 'email');
  }

  static any(...args) {
    return _db2.default.raw('SELECT EXISTS ?', _db2.default.table('users').where(...args).select(_db2.default.raw('1'))).then(x => x.rows[0].exists);
  }

  static create(user) {
    return _db2.default.table('users').insert(user, ['id', 'email']).then(x => x[0]);
  }

  static setClaims(userId, provider, providerKey, claims) {
    return _db2.default.transaction(trx => Promise.all([trx.table('user_logins').insert({
      user_id: userId,
      name: provider,
      key: providerKey
    }), ...claims.map(claim => trx.raw('SELECT EXISTS ?', trx.table('user_claims').where({ user_id: userId, type: claim.type })).then(x => x.rows[0].exists ? // eslint-disable-line no-confusing-arrow
    trx.table('user_claims').where({ user_id: userId, type: claim.type }).update({ value: claim.value }) : trx.table('user_claims').insert({ user_id: userId, type: claim.type, value: claim.value })))]));
  }
} /**
   * Node.js API Starter Kit (https://reactstarter.com/nodejs)
   *
   * Copyright © 2016-present Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

exports.default = User;
//# sourceMappingURL=User.js.map
